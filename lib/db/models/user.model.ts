import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String },
  interestedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
