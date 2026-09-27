import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { FiImage, FiPlus } from "react-icons/fi";
import { Card, ImageButton, Badge, CardBody, NameButton, CardFooter, Prices, AddButton, Stepper, Unavailable } from "./styles";
import { convertPrice } from "../../../utilities/convertPrice";
import { addToCart, adjustQuantity, removeFromCart } from "../../../redux/cart/cartActions";
import { getProduct, PRODUCT_QUERY_KEY } from "../../../apis/products/getProduct";
import { trackAddToCart } from "../../../utilities/analyticsTracking";
import { productNeedsOptionsDialog } from "../../../product-options/resolveOptions";
import { getImageUrl } from "../../../utilities/imageUrl";
import { getCurrencySymbol } from "../../../utilities/getCurrencySymbol";
import { enabled, localized, productPrice } from "../menuHelpers";

export default function Theme1ProductCard({ plate, categories, restaurantName, restaurant, features }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const language = restaurant?.activeLanguage || "en";
  const ar = language === "ar";
  const cart = useSelector((state) => state.cart?.[restaurantName] || []);
  const category = categories.find((item) => String(item.id) === String(plate.category_id)) || plate.category;
  const price = productPrice(plate, category);
  const currency = getCurrencySymbol(restaurant?.currency);
  const name = localized(plate, "name", language);
  const unavailable = enabled(plate.out_of_stock);
  const hasOptions = productNeedsOptionsDialog(plate.form_json, category?.form_json);
  const cartEnabled = enabled(features.cart);
  const line = cart.find((item) => String(item.id) === String(plate.id) &&
    (!item.formData || Object.keys(item.formData).length === 0) && !item.instruction);
  const quantity = line?.quantity || 0;
  const cover = plate.images?.find((item) => String(item.id) === String(plate.new_cover_id) && item.url)
    || plate.images?.find((item) => item.url);
  const source = cover?.url ? getImageUrl(cover.url) : "";
  const [broken, setBroken] = useState(false);
  useEffect(() => setBroken(false), [source]);

  const openDetails = () => {
    const next = new URLSearchParams(searchParams);
    next.set("productId", plate.id);
    // One router navigation: preserve category/search context and browser Back.
    setSearchParams(next, { state: { theme1Product: true } });
  };
  const prefetch = () => queryClient.prefetchQuery({
    queryKey: PRODUCT_QUERY_KEY(plate.id), queryFn: () => getProduct(plate.id), staleTime: 5 * 60 * 1000,
  });
  const add = () => {
    if (!cartEnabled || unavailable) return;
    if (hasOptions) { openDetails(); return; }
    dispatch(addToCart(restaurantName, plate, 1, {}, price.final, ""));
    if (restaurant?.id) trackAddToCart(restaurant.id, plate.id, plate.category_id, 1, restaurant.branches?.[0]?.id || null);
  };
  const changeQuantity = (delta) => {
    if (!line || unavailable || !cartEnabled) return;
    const next = Number(line.quantity) + delta;
    dispatch(next > 0 ? adjustQuantity(restaurantName, line.uniqueId, next) : removeFromCart(restaurantName, line.uniqueId));
  };
  return (
    <Card>
      <ImageButton type="button" onClick={openDetails} onMouseEnter={prefetch} onFocus={prefetch}
        aria-label={`${ar ? "عرض" : "View"} ${name}`}>
        {source && !broken ? <img src={source} alt="" loading="lazy" onError={() => setBroken(true)} /> : <FiImage size={32} aria-hidden="true" />}
        {enabled(plate.new) ? <Badge>{ar ? "جديد" : "New"}</Badge> : enabled(plate.is_best_seller) ? <Badge>{ar ? "الأكثر طلباً" : "Popular"}</Badge> : null}
      </ImageButton>
      <CardBody>
        <NameButton type="button" $fontSize={restaurant?.font_size} onClick={openDetails}>{name}</NameButton>
        <CardFooter>
          {price.hasPrice && <Prices><span>{convertPrice(price.final, currency)}</span>{price.discount > 0 && <del>{convertPrice(price.base, currency)}</del>}</Prices>}
          {unavailable ? <Unavailable>{ar ? "غير متوفر" : "Unavailable"}</Unavailable> : cartEnabled && (
            quantity > 0 && !hasOptions ? <Stepper>
              <button type="button" onClick={() => changeQuantity(-1)} aria-label={`${ar ? "تقليل كمية" : "Decrease quantity of"} ${name}`}>−</button>
              <output aria-live="polite" aria-label={`${ar ? "الكمية" : "Quantity"}: ${name}`}>{quantity}</output>
              <button type="button" onClick={() => changeQuantity(1)} aria-label={`${ar ? "زيادة كمية" : "Increase quantity of"} ${name}`}>+</button>
            </Stepper> : <AddButton type="button" onClick={add} aria-label={`${hasOptions ? (ar ? "اختيار خيارات" : "Choose options for") : (ar ? "أضف إلى السلة" : "Add to cart:")} ${name}`}>
              <FiPlus size={18} aria-hidden="true" />{hasOptions && <span>{ar ? "خيارات" : "Options"}</span>}
            </AddButton>
          )}
        </CardFooter>
      </CardBody>
    </Card>
  );
}
