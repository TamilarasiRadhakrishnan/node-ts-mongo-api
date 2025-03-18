import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Object,
  phone: String,
  website: String,
  company: Object,
});

export const User = mongoose.model("User", UserSchema);
