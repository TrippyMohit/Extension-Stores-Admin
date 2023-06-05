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
  addSwtiches,
  turnOffAllSwitches,
  toggleSwtichOne,
  toggleSwtichTwo,
  toggleSwtichThree,
  toggleSwtichFour,
  offAllSwTrueAdblocker,
  toggleSwOneTADB,
  toggleSwTwoTADB,
  toggleSwThreeTADB,
  toggleSwFourTADB,
  offAllSwOttParty,
  toggleSwOneOttParty,
  toggleSwTwoOttParty,
  toggleSwThreeOttParty,
  toggleSwFourOttParty,
} from "../controller/switch-controller.js";
const router = express.Router();

//Switch routes
router.post("/addSwtiches", addSwtiches);
router.get("/allSwitches", getSwitches);
//NPD
router.put("/turnOfAllSwitches", turnOffAllSwitches);
router.put("/switchOne", toggleSwtichOne);
router.put("/switchTwo", toggleSwtichTwo);
router.put("/switchThree", toggleSwtichThree);
router.put("/switchFour", toggleSwtichFour);
//True adblocker
router.put("/offAllSwTrueAdblocker", offAllSwTrueAdblocker);
router.put("/toggleSwOneTADB", toggleSwOneTADB);
router.put("/toggleSwTwoTADB", toggleSwTwoTADB);
router.put("/toggleSwThreeTADB", toggleSwThreeTADB);
router.put("/toggleSwFourTADB", toggleSwFourTADB);
//OTT Party
router.put("/offAllSwOttParty", offAllSwOttParty);
router.put("/toggleSwOneOttParty", toggleSwOneOttParty);
router.put("/toggleSwTwoOttParty", toggleSwTwoOttParty);
router.put("/toggleSwThreeOttParty", toggleSwThreeOttParty);
router.put("/toggleSwFourOttParty", toggleSwFourOttParty);
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
