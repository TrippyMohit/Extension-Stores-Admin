import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  storeName: String,
  storeUrl: String,
  affilatedStore: String,
  affilateLink: String,
  time: String,
});

const store = mongoose.model("store", storeSchema);

export default store;
