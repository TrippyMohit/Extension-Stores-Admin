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
import {
  getSwitches,
  turnOffAllSwitches,
  addSwtiches,
  toggleSwtichOne,
  toggleSwtichTwo,
  toggleSwtichThree,
  toggleSwtichFour,
} from "../controller/switch-controller.js";
const router = express.Router();

//Switch routes
router.post("/addSwtiches", addSwtiches);
router.put("/turnOfAllSwitches", turnOffAllSwitches);
router.get("/allSwitches", getSwitches);
router.put("/switchOne", toggleSwtichOne);
router.put("/switchTwo", toggleSwtichTwo);
router.put("/switchThree", toggleSwtichThree);
router.put("/switchFour", toggleSwtichFour);

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
