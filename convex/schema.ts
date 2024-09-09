import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    sku: v.string(),
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    price: v.float64(),
    in_stock: v.boolean(),
    images: v.array(v.string()),
    volume: v.number(),
  }),
  product_images: defineTable({
    product_id: v.id("products"),
    image_url: v.string(),
  }),
  users: defineTable({
    email: v.string(),
    password: v.string(),
    first_name: v.string(),
    last_name: v.string(),
    role: v.string(),
  }),
  orders: defineTable({
    user_id: v.id("users"),
    status: v.string(),
    total: v.number(),
    items: v.array(v.id("products")),
  }),
  categories: defineTable({
    name: v.string(),
    products: v.array(v.id("products")),
  }),
  reviews: defineTable({
    user_id: v.id("users"),
    product_id: v.id("products"),
    rating: v.number(),
    comment: v.string(),
  }),
  cart: defineTable({
    user_id: v.id("users"),
    items: v.array(v.id("products")),
  }),
  wishlist: defineTable({
    user_id: v.id("users"),
    items: v.array(v.id("products")),
  }),
  addresses: defineTable({
    user_id: v.id("users"),
    street: v.string(),
    city: v.string(),
    postal_code: v.string(),
  }),
  payments: defineTable({
    user_id: v.id("users"),
    order_id: v.id("orders"),
    amount: v.number(),
    status: v.string(),
  }),
  events: defineTable({
    name: v.string(),
    description: v.string(),
    date: v.string(),
    location: v.string(),
    image: v.string(),
  }),
});
