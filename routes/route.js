import express, { Router } from "express";
import {
  addStore,
  getStores,
  getStoreById,
  editStore,
  deleteStore,
} from "../controller/store-controller.js";
import {
  registerUser,
  loginUser,
  verfiyToken,
} from "../controller/user-controller.js";
import {} from "../controller/user-controller.js";

const router = express.Router();

//Users routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//Stores routes
// router.post("/add", verfiyToken, addStore);
router.post("/add", addStore);
router.get("/all", getStores);
router.get("/:id", getStoreById);
router.put("/:id", editStore);
router.delete("/:id", deleteStore);

export default router;
