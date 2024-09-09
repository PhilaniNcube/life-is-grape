import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createProduct = mutation({
  args: {
    sku: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.float64(),
    in_stock: v.boolean(),
    images: v.array(v.string()),
    volume: v.number(),
    image_url: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db
      .insert("products", {
        sku: args.sku,
        name: args.name,
        description: args.description,
        price: args.price,
        in_stock: args.in_stock,
        images: args.images,
        volume: args.volume,
      })
  },
});
