import React, { useState, useMemo } from "react";
import { FiX, FiMinus, FiPlus, FiTrash2, FiSend } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQuantity, clearCart } from "../../../../redux/cart/cartActions";
import { useAddOrderQuery } from "../../../../apis/restaurants/addOrder";
import { cartItemFormDataToLines } from "../../../../product-options/cartLabels";
import { trackOrderPlaced } from "../../../../utilities/analyticsTracking";
import { convertPrice } from "../../../../utilities/convertPrice";
import { formatCartItemOptionsForOrderMessage } from "../../../../product-options/cartLabels";
import { openWhatsApp } from "../../../../utilities/formatWhatsappNumber";
import {
  CartOvWrap, CartDrawerEl, CartHeader, CartTitle, CartCloseBtn,
  CartBody, CartEmpty, CartItemRow, CartItemImg, CartItemInfo,
  CartItemName, CartItemPrice, CartItemNote, CartItemQty, CartItemTotal, CartItemDelete,
  CartFooter, CartTotalRow, CartCheckoutBtn,
  CheckoutLabel, CheckoutInput, CheckoutTextarea,
  OrderTypeRow, OrderTypeBtn, CheckoutActions, CheckoutBackBtn, WhatsAppBtn,
} from "../../styles";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

function getCartItemImage(item) {
  const coverIdx = item.images?.findIndex((img) => img.id === item.new_cover_id);
  const img = coverIdx >= 0 ? item.images[coverIdx] : item.images?.[0];
  return img?.url ? `${STORAGE_URL}${img.url}` : null;
}

function CartItem({ item, restaurantName, currencySymbol, activeLanguage, dispatch }) {
  const name = activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name;
  const imageUrl = getCartItemImage(item);
  const itemTotal = item.price * item.quantity;
  const optionLines = useMemo(() => cartItemFormDataToLines(item, activeLanguage), [item, activeLanguage]);

  return (
    <CartItemRow>
      {imageUrl && (
        <CartItemImg>
          <img src={imageUrl} alt={name} />
        </CartItemImg>
      )}
      <CartItemInfo>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <CartItemName>{name}</CartItemName>
          <CartItemDelete onClick={() => dispatch(removeFromCart(restaurantName, item.uniqueId))}>
            <FiTrash2 />
          </CartItemDelete>
        </div>
        <CartItemPrice>{convertPrice(item.price, currencySymbol)}</CartItemPrice>
        {optionLines.length > 0 && (
          <div style={{ fontSize: "0.625rem", color: "#918C86", marginTop: 4 }}>
            {optionLines.filter(b => b.type === "line").map((b, i) => (
              <div key={i}>{b.text}</div>
            ))}
          </div>
        )}
        {item.instruction && <CartItemNote>{item.instruction}</CartItemNote>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
          <CartItemQty>
            <button
              onClick={() => {
                if (item.quantity <= 1) dispatch(removeFromCart(restaurantName, item.uniqueId));
                else dispatch(adjustQuantity(restaurantName, item.uniqueId, item.quantity - 1));
              }}
            >
              <FiMinus />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(adjustQuantity(restaurantName, item.uniqueId, item.quantity + 1))}>
              <FiPlus />
            </button>
          </CartItemQty>
          <CartItemTotal>{convertPrice(itemTotal, currencySymbol)}</CartItemTotal>
        </div>
      </CartItemInfo>
    </CartItemRow>
  );
}

export default function CartPopup({
  restaurant,
  restaurantName,
  activeLanguage,
  currencySymbol,
  features,
  cart,
  popupHandler,
  isRtl,
}) {
  const dispatch = useDispatch();
  const { handleApiCallAsync: handleAddOrderAsync } = useAddOrderQuery({
    onSuccess: () => {},
  });
  const [step, setStep] = useState("cart"); // cart | checkout
  const [orderType, setOrderType] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Available order types
  const orderTypes = useMemo(() => {
    const types = [];
    if (features?.delivery_order) types.push({ key: "Delivery", label: activeLanguage === "ar" ? "توصيل" : "Delivery" });
    if (features?.takeaway_order) types.push({ key: "TakeAway", label: activeLanguage === "ar" ? "استلام" : "Pickup" });
    if (features?.dinein_order) types.push({ key: "DineIn", label: activeLanguage === "ar" ? "في المطعم" : "Dine-in" });
    return types;
  }, [features, activeLanguage]);

  // Auto-select if only one type
  useState(() => {
    if (orderTypes.length === 1) setOrderType(orderTypes[0].key);
  });

  const whatsappNumber = restaurant?.branches?.[0]?.whatsapp_number || "";

  const buildWhatsAppMessage = () => {
    let msg = `*New Order - ${orderType}*\n`;
    msg += `----------------------------\n\n`;

    cart.forEach((item, idx) => {
      const name = activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name;
      const catName = item.category
        ? (activeLanguage === "ar" && item.category.ar_category ? item.category.ar_category : item.category.en_category)
        : "";
      const itemTotal = item.price * item.quantity;

      msg += `${idx + 1}. *${(name || "").trim()}*\n`;
      if (catName) msg += `    ${catName.trim()}\n`;
      msg += `    ${item.quantity}x ${convertPrice(item.price, currencySymbol)} = *${convertPrice(itemTotal, currencySymbol)}*\n`;

      // Format options
      if (item.formData && Object.keys(item.formData).length > 0) {
        try {
          const optionsText = formatCartItemOptionsForOrderMessage(item, activeLanguage);
          if (optionsText) msg += `    ${optionsText}\n`;
        } catch (e) {}
      }

      if (item.instruction) {
        msg += `    > _${item.instruction}_\n`;
      }
      msg += `\n`;
    });

    msg += `----------------------------\n`;
    msg += `*Total: ${convertPrice(total, currencySymbol)}*\n\n`;

    if (customerName) msg += `*Name:* ${customerName}\n`;
    if (customerPhone) msg += `*Phone:* ${customerPhone}\n`;
    if (orderType === "Delivery" && customerAddress) msg += `*Address:* ${customerAddress}\n`;
    if (orderType === "DineIn" && tableNumber) msg += `*Table:* ${tableNumber}\n`;
    if (orderNotes) msg += `*Notes:* ${orderNotes}\n`;

    return msg;
  };

  const sendWhatsApp = async () => {
    let msg = buildWhatsAppMessage();

    // Prepare order data for database
    const simplifiedCart = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      branch_id: restaurant?.branches?.[0]?.id,
      restaurant_id: restaurant?.id,
    }));

    const fullOrderItems = cart.map((item) => ({
      product_id: item.id,
      product_name: activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name,
      quantity: item.quantity,
      price: item.price,
      total_price: item.price * item.quantity,
      form_data: item.formData || {},
      instruction: item.instruction || "",
      product_details: {
        en_name: item.en_name,
        ar_name: item.ar_name,
        en_price: item.en_price,
        ar_price: item.ar_price,
        category_id: item.category_id,
      },
    }));

    // Create order in database (fire-and-forget to avoid iOS popup blocking)
    const simplifiedCartCopy = [...simplifiedCart];
    const fullOrderItemsCopy = [...fullOrderItems];
    handleAddOrderAsync(
      {
        products: simplifiedCartCopy,
        restaurant_id: restaurant?.id,
        branch_id: restaurant?.branches?.[0]?.id,
        delivery_type: orderType,
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_address: orderType === "Delivery" ? customerAddress : null,
        customer_latitude: null,
        customer_longitude: null,
        table_number: orderType === "DineIn" ? tableNumber : null,
        note: orderNotes,
        items: fullOrderItemsCopy,
        subtotal: total,
        total: total,
        currency: restaurant?.currency,
      },
      restaurantName
    ).then((orderResponse) => {
      if (restaurant?.id) {
        const branchId = restaurant?.branches?.[0]?.id || null;
        trackOrderPlaced(
          restaurant.id,
          orderResponse?.data?.order?.id || null,
          orderType,
          total,
          branchId,
          { items: fullOrderItemsCopy, customerName: customerName }
        );
      }
    }).catch((e) => console.error("Order creation failed:", e));

    // Redirect to WhatsApp immediately (works on iOS WebView)
    openWhatsApp(whatsappNumber, msg);
    dispatch(clearCart(restaurantName));
    popupHandler(null);
  };

  return (
    <CartOvWrap $rtl={isRtl} onClick={() => popupHandler(null)}>
      <CartDrawerEl $rtl={isRtl} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <CartHeader>
          <CartTitle $rtl={isRtl}>
            {step === "cart"
              ? (activeLanguage === "ar" ? "السلة" : "Your Cart")
              : (activeLanguage === "ar" ? "إتمام الطلب" : "Checkout")}
          </CartTitle>
          <CartCloseBtn onClick={() => popupHandler(null)}>
            <FiX />
          </CartCloseBtn>
        </CartHeader>

        {/* Body */}
        <CartBody>
          {step === "cart" ? (
            <>
              {cart.length === 0 ? (
                <CartEmpty>
                  {activeLanguage === "ar" ? "السلة فارغة" : "Your cart is empty"}
                </CartEmpty>
              ) : (
                cart.map((item) => (
                  <CartItem
                    key={item.uniqueId}
                    item={item}
                    restaurantName={restaurantName}
                    currencySymbol={currencySymbol}
                    activeLanguage={activeLanguage}
                    dispatch={dispatch}
                  />
                ))
              )}
            </>
          ) : (
            /* Checkout step */
            <div style={{ padding: "16px 0" }}>
              {/* Order type */}
              {orderTypes.length > 1 && (
                <>
                  <CheckoutLabel>
                    {activeLanguage === "ar" ? "نوع الطلب" : "Order Type"}
                  </CheckoutLabel>
                  <OrderTypeRow>
                    {orderTypes.map((t) => (
                      <OrderTypeBtn
                        key={t.key}
                        $active={orderType === t.key}
                        onClick={() => setOrderType(t.key)}
                      >
                        {t.label}
                      </OrderTypeBtn>
                    ))}
                  </OrderTypeRow>
                </>
              )}

              <CheckoutInput
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={activeLanguage === "ar" ? "الاسم" : "Your Name"}
              />
              <CheckoutInput
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder={activeLanguage === "ar" ? "رقم الهاتف" : "Phone Number"}
              />

              {orderType === "Delivery" && (
                <CheckoutTextarea
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder={activeLanguage === "ar" ? "عنوان التوصيل" : "Delivery Address"}
                  rows={2}
                />
              )}

              {orderType === "DineIn" && (
                <CheckoutInput
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder={activeLanguage === "ar" ? "رقم الطاولة" : "Table Number"}
                />
              )}

              <CheckoutTextarea
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder={activeLanguage === "ar" ? "ملاحظات إضافية" : "Order Notes (optional)"}
                rows={2}
              />
            </div>
          )}
        </CartBody>

        {/* Footer */}
        {cart.length > 0 && (
          <CartFooter>
            <CartTotalRow>
              <span>{activeLanguage === "ar" ? "المجموع" : "Total"}</span>
              <span>{convertPrice(total, currencySymbol)}</span>
            </CartTotalRow>

            {step === "cart" ? (
              <CartCheckoutBtn onClick={() => setStep("checkout")}>
                {activeLanguage === "ar" ? "متابعة الطلب" : "Proceed to Checkout"}
              </CartCheckoutBtn>
            ) : (
              <CheckoutActions>
                <CheckoutBackBtn onClick={() => setStep("cart")}>
                  {activeLanguage === "ar" ? "رجوع" : "Back"}
                </CheckoutBackBtn>
                <WhatsAppBtn
                  onClick={sendWhatsApp}
                  disabled={!orderType || !customerName}
                >
                  <FiSend />
                  {activeLanguage === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
                </WhatsAppBtn>
              </CheckoutActions>
            )}
          </CartFooter>
        )}
      </CartDrawerEl>
    </CartOvWrap>
  );
}
