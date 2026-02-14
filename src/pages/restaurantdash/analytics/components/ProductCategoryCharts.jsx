import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTitle, ProductsGrid, ProductCard } from "../styles";

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#06b6d4", "#f97316"];

export const TopProductsChart = ({ products, metric = "views", limit = 10 }) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <ChartContainer>
        <ChartTitle>Top Products by {metric.charAt(0).toUpperCase() + metric.slice(1)}</ChartTitle>
        <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
          No product data available
        </div>
      </ChartContainer>
    );
  }

  const chartData = products
    .slice(0, limit)
    .map((product) => ({
      name: product.product_name || product.product_name_en || product.product_name_ar || `Product ${product.product_id}`,
      product_id: product.product_id,
      value: product[metric] || product.views || product.orders || product.revenue || 0,
      views: product.views || 0,
      orders: product.orders || 0,
      revenue: product.revenue || 0,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <ChartContainer>
      <ChartTitle>Top {limit} Products by {metric.charAt(0).toUpperCase() + metric.slice(1)}</ChartTitle>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={100} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "value") return [value, metric];
              return [value, name];
            }}
          />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export const TopCategoriesChart = ({ categories, metric = "views", limit = 10 }) => {
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return (
      <ChartContainer>
        <ChartTitle>Top Categories by {metric.charAt(0).toUpperCase() + metric.slice(1)}</ChartTitle>
        <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
          No category data available
        </div>
      </ChartContainer>
    );
  }

  const chartData = categories
    .slice(0, limit)
    .map((category) => ({
      name: category.category_name || category.category_name_en || category.category_name_ar || `Category ${category.category_id}`,
      category_id: category.category_id,
      value: category[metric] || category.views || category.orders || category.revenue || 0,
      views: category.views || 0,
      orders: category.orders || 0,
      revenue: category.revenue || 0,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <ChartContainer>
      <ChartTitle>Top {limit} Categories by {metric.charAt(0).toUpperCase() + metric.slice(1)}</ChartTitle>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export const ProductsList = ({ products, title = "Top Products", limit = 10 }) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return null;
  }

  const topProducts = products.slice(0, limit);

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ProductsGrid>
        {topProducts.map((product, index) => (
          <ProductCard key={product.product_id || index}>
            <div style={{ fontWeight: 600, marginBottom: "8px" }}>
              {product.product_name || product.product_name_en || product.product_name_ar || `Product #${product.product_id}`}
            </div>
            {product.product_id && (
              <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "4px" }}>
                ID: {product.product_id}
              </div>
            )}
            <div style={{ fontSize: "12px", color: "#64748b" }}>
              <div>Views: {product.views || 0}</div>
              <div>Add to Cart: {product.addToCart || 0}</div>
              <div>Orders: {product.orders || 0}</div>
              <div>Revenue: ${(product.revenue || 0).toFixed(2)}</div>
              {product.viewToCartRate !== undefined && (
                <div>View→Cart: {(product.viewToCartRate || 0).toFixed(1)}%</div>
              )}
              {product.cartToOrderRate !== undefined && (
                <div>Cart→Order: {(product.cartToOrderRate || 0).toFixed(1)}%</div>
              )}
            </div>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ChartContainer>
  );
};

export const CategoriesList = ({ categories, title = "Top Categories", limit = 10 }) => {
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return null;
  }

  const topCategories = categories.slice(0, limit);

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ProductsGrid>
        {topCategories.map((category, index) => (
          <ProductCard key={category.category_id || index}>
            <div style={{ fontWeight: 600, marginBottom: "8px" }}>
              {category.category_name || category.category_name_en || category.category_name_ar || `Category #${category.category_id}`}
            </div>
            {category.category_id && (
              <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "4px" }}>
                ID: {category.category_id}
              </div>
            )}
            <div style={{ fontSize: "12px", color: "#64748b" }}>
              <div>Views: {category.views || 0}</div>
              <div>Add to Cart: {category.addToCart || 0}</div>
              <div>Orders: {category.orders || 0}</div>
              <div>Revenue: ${(category.revenue || 0).toFixed(2)}</div>
              {category.viewToCartRate !== undefined && (
                <div>View→Cart: {(category.viewToCartRate || 0).toFixed(1)}%</div>
              )}
              {category.cartToOrderRate !== undefined && (
                <div>Cart→Order: {(category.cartToOrderRate || 0).toFixed(1)}%</div>
              )}
            </div>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ChartContainer>
  );
};
