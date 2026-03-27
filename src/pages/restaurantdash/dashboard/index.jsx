import React from "react";
import { useGetCategories } from "../../../apis/categories/getCategories";
import { useGetProducts } from "../../../apis/products/getProducts";
import {
  Wrapper,
  Hero,
  HeroTitle,
  HeroSubtitle,
  MetaRow,
  MetaPill,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  ActionsRow,
  ActionButton,
  ChartsGrid,
  ChartCard,
  ChartTitle,
  Rows,
  Row,
  RowLabel,
  RowTrack,
  RowFill,
  RowValue,
  DonutWrap,
  Donut,
  Legend,
  LegendItem,
  Dot,
  LeftLegend,
} from "./styles";

const isOutOfStock = (product) => {
  if (product?.in_stock === false) return true;
  if (typeof product?.quantity === "number" && product.quantity <= 0) return true;
  if (typeof product?.stock === "number" && product.stock <= 0) return true;
  return false;
};

export default function Dashboard({ userInformation, setSection }) {
  const restaurantId = userInformation?.restaurant_id;

  const { response: categoriesResponse } = useGetCategories({
    onSuccess: () => {},
    restaurantId,
  });

  const { response: productsResponse } = useGetProducts({
    onSuccess: () => {},
    restaurantId,
  });

  const categories = categoriesResponse?.data?.data || [];
  const products = productsResponse?.data?.data || [];

  const discountedProducts = products.filter(
    (p) => Number(p?.discount || 0) > 0
  ).length;
  const outOfStockProducts = products.filter(isOutOfStock).length;
  const availableProducts = Math.max(products.length - outOfStockProducts, 0);
  const availableDeg =
    products.length > 0 ? Math.round((availableProducts / products.length) * 360) : 360;

  const categoryCounts = products.reduce((acc, product) => {
    const name =
      product?.category?.en_category ||
      product?.category?.ar_category ||
      "Uncategorized";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxTopCategoryCount = topCategories[0]?.[1] || 1;

  return (
    <Wrapper>
      <Hero>
        <HeroTitle>
          Welcome back, {userInformation?.username || "Restaurant Admin"}
        </HeroTitle>
        <HeroSubtitle>
          Manage your menu, settings, and operations from one professional
          workspace.
        </HeroSubtitle>
        <MetaRow>
          <MetaPill>Restaurant ID: {restaurantId || "-"}</MetaPill>
          <MetaPill>Template: Theme {userInformation?.template_id || "-"}</MetaPill>
          <MetaPill>Language: {userInformation?.Lang || "-"}</MetaPill>
        </MetaRow>
      </Hero>

      <StatsGrid>
        <StatCard>
          <StatLabel>Total Categories</StatLabel>
          <StatValue>{categories.length}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Total Products</StatLabel>
          <StatValue>{products.length}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Discounted Products</StatLabel>
          <StatValue>{discountedProducts}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Out of Stock</StatLabel>
          <StatValue>{outOfStockProducts}</StatValue>
        </StatCard>
      </StatsGrid>

      <ActionsRow>
        <ActionButton onClick={() => setSection("Categories")}>
          Manage Categories
        </ActionButton>
        <ActionButton onClick={() => setSection("Products")}>
          Manage Products
        </ActionButton>
        <ActionButton onClick={() => setSection("Settings")}>
          Restaurant Settings
        </ActionButton>
        <ActionButton onClick={() => setSection("Report")}>
          Download Reports
        </ActionButton>
      </ActionsRow>

      <ChartsGrid>
        <ChartCard>
          <ChartTitle>Top Categories by Products</ChartTitle>
          <Rows>
            {topCategories.length === 0 && (
              <Row>
                <RowLabel>No category data yet</RowLabel>
                <RowTrack>
                  <RowFill $width={0} />
                </RowTrack>
                <RowValue>0</RowValue>
              </Row>
            )}
            {topCategories.map(([name, count]) => (
              <Row key={name}>
                <RowLabel title={name}>{name}</RowLabel>
                <RowTrack>
                  <RowFill $width={(count / maxTopCategoryCount) * 100} />
                </RowTrack>
                <RowValue>{count}</RowValue>
              </Row>
            ))}
          </Rows>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Inventory Health</ChartTitle>
          <DonutWrap>
            <Donut $availableDeg={availableDeg} />
            <Legend>
              <LegendItem>
                <LeftLegend>
                  <Dot $color="#16a34a" />
                  Available
                </LeftLegend>
                <span>{availableProducts}</span>
              </LegendItem>
              <LegendItem>
                <LeftLegend>
                  <Dot $color="#ef4444" />
                  Out of stock
                </LeftLegend>
                <span>{outOfStockProducts}</span>
              </LegendItem>
              <LegendItem>
                <LeftLegend>
                  <Dot $color="#64748b" />
                  Total
                </LeftLegend>
                <span>{products.length}</span>
              </LegendItem>
            </Legend>
          </DonutWrap>
        </ChartCard>
      </ChartsGrid>
    </Wrapper>
  );
}
