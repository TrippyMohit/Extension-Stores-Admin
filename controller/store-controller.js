import Store from "../schema/store-schema.js";

export const addStore = async (request, response) => {
  const { storeName, storeUrl, affilatedStore, affilateLink, time } =
    request.body;
  const store = request.body;
  // Create new Store
  const newStore = new Store(store);
  try {
    const store = await Store.findOne({ storeName });
    if (store) {
      return response.status(400).json({ message: "storeName already exists" });
    }
    await newStore.save();
    response.status(201).json(newStore);
  } catch (error) {
    response.status(409).json({ message: error.message });
    console.log(error);
  }
};

// Get Stores
export const getStores = async (request, response) => {
  try {
    const stores = await Store.find();
    response.status(200).json(stores);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Get store by id
export const getStoreById = async (request, response) => {
  try {
    const store = await Store.findById(request.params.id);
    response.status(200).json(store);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Save data from edited store in the database
export const editStore = async (request, response) => {
  let store = request.body;
  const editStore = new Store(store);
  try {
    await Store.updateOne({ _id: request.params.id }, editStore);
    response.status(201).json(editStore);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteStore = async (request, response) => {
  try {
    await Store.deleteOne({ _id: request.params.id });
    response.status(201).json("Store Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
