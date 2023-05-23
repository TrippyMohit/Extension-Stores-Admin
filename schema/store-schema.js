import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  storeName: {
    type: String,
    require: true,
    uniquie: true,
  },
  storeUrl: {
    type: String,
    require: true,
  },
  affilatedStore: {
    type: String,
    require: true,
  },
  affilateLink: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
    default: 1,
  },
});

const store = mongoose.model("store", storeSchema);

export default store;
