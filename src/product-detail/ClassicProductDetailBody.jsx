import React from "react";
import _ from "lodash";
import {
  AddToCart,
  ButtonWrapper,
  DiscountPrice,
  InfoContainer,
  Instruction,
  InstructionContainer,
  InstructionLabel,
  ItemDescription,
  ItemInfo,
  ItemInfoWrapper,
  ItemName,
  ItemPrice,
  Minus,
  Plus,
  PriceContainer,
  Quantity,
  QuantityPrice,
  QuantityWrapper,
  OutOfStockNotice,
} from "../pages/theme2/ProductParam/styles";
import ProductForm from "../pages/theme2/ProductParam/Form";
import ProductOptionsPicker from "../product-options/ProductOptionsPicker";
import { hasAnyOptions } from "../product-options/schema";
import { convertPrice } from "../utilities/convertPrice";

/**
 * Theme 2–style product meta, v2 options, legacy Form.io, instruction, and cart footer.
 * Styled components come from theme2 ProductParam/styles.
 */
export default function ClassicProductDetailBody({
  restaurant,
  fetchedProduct,
  formResolution,
  formData,
  setFormData,
  formErrors,
  handlePriceChange,
  descriptionHtml,
  currencySymbol,
  totalPrice,
  finalDiscount,
  isOutOfStock,
  CloseAnimation,
  quantity,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
  setInstruction,
  /** When false, quantity + add-to-cart bar is hidden (e.g. restaurant cart feature off). */
  showCartFooter = true,
}) {
  const lang = restaurant?.activeLanguage;
  const isEn = lang === "en";

  return (
    <>
      <ItemInfoWrapper>
        <InfoContainer>
          <ItemInfo CloseAnimation={CloseAnimation} activeLanguage={lang}>
            <ItemName activeLanguage={lang}>
              {isEn ? fetchedProduct?.en_name : fetchedProduct?.ar_name}
            </ItemName>

            {!_.isEmpty(fetchedProduct?.en_price) && (
              <PriceContainer>
                <ItemPrice
                  activeLanguage={lang}
                  discounted={finalDiscount !== 0.0}
                >
                  {convertPrice(totalPrice, currencySymbol)}
                </ItemPrice>
                {finalDiscount !== 0.0 && (
                  <DiscountPrice activeLanguage={lang}>
                    {convertPrice(
                      totalPrice * (1 - parseFloat(finalDiscount) / 100),
                      currencySymbol
                    )}
                  </DiscountPrice>
                )}
              </PriceContainer>
            )}
            <ItemDescription
              activeLanguage={lang}
              dangerouslySetInnerHTML={{ __html: descriptionHtml || "" }}
            />
            {isOutOfStock && (
              <OutOfStockNotice>
                {isEn ? "Out of stock" : "غير متوفر حالياً"}
              </OutOfStockNotice>
            )}
            {formResolution.mode === "v2" &&
              hasAnyOptions(formResolution.options) && (
                <ProductOptionsPicker
                  options={formResolution.options}
                  formData={formData}
                  setFormData={setFormData}
                  formErrors={formErrors}
                  activeLanguage={lang === "ar" ? "ar" : "en"}
                  currencySymbol={currencySymbol}
                  basePrice={fetchedProduct?.en_price}
                  onPriceChange={handlePriceChange}
                />
              )}
            {formResolution.mode === "legacy" &&
              formResolution.legacyForm?.components && (
                <ProductForm
                  formSchema={formResolution.legacyForm}
                  onPriceChange={handlePriceChange}
                  formData={formData}
                  setFormData={setFormData}
                  basePrice={fetchedProduct?.en_price}
                  formErrors={formErrors}
                />
              )}
            <InstructionContainer activeLanguage={lang}>
              <InstructionLabel>
                {isEn ? "Any Special Instuction ?" : "أي تعليمات خاصة؟"}
              </InstructionLabel>
              <Instruction
                activeLanguage={lang}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder={
                  isEn ? "Special Instruction" : "تعليمات خاصة"
                }
              />
            </InstructionContainer>
          </ItemInfo>
        </InfoContainer>
      </ItemInfoWrapper>
      {showCartFooter && !isOutOfStock && (
        <ButtonWrapper CloseAnimation={CloseAnimation}>
          <QuantityWrapper CloseAnimation={CloseAnimation}>
            <Plus onClick={handleIncrement}>+</Plus>
            <Quantity>{quantity}</Quantity>
            <Minus onClick={handleDecrement}>-</Minus>
          </QuantityWrapper>
          <AddToCart onClick={handleAddToCart}>
            {isEn ? "Add To Cart" : "أضف إلى السلة"}
            <QuantityPrice>
              {convertPrice(
                quantity *
                  (totalPrice * (1 - parseFloat(finalDiscount) / 100)),
                currencySymbol
              )}
            </QuantityPrice>
          </AddToCart>
        </ButtonWrapper>
      )}
    </>
  );
}
