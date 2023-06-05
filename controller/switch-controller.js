import Swtich from "../schema/switch-schema.js";
import { ClientSession, MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config;

// // setting switches
export const addSwtiches = async (request, response) => {
  const uri = process.env.MONGOURI;
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("test");
      const haiku = database.collection("swtiches");
      // create a document to insert
      const doc = {
        switchOne: true,
        switchTwo: true,
        switchThree: true,
        switchFour: true,
      };
      const result = await haiku.insertOne(doc);
      // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};
//getting switches
export const getSwitches = async (request, response) => {
  try {
    const swtich = await Swtich.find();
    response.status(200).json(swtich);
  } catch (error) {
    console.log(error.messsage);
  }
};

////////////////////////////////All Toggles function ///////////////////////////////
const toggleSwitchOne = async (id, request, response) => {
  try {
    const filter = { _id: id };
    const existingSwitch = await Swtich.findOne(filter).select("switchOne");
    const updatedValue = !existingSwitch.switchOne;
    const update = { switchOne: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchOne: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const toggleSwitchTwo = async (id, request, response) => {
  try {
    const filter = { _id: id };
    const existingSwitch = await Swtich.findOne(filter).select("switchTwo");
    const updatedValue = !existingSwitch.switchTwo;
    const update = { switchTwo: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchTwo: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const toggleSwitchThree = async (id, request, response) => {
  try {
    const filter = { _id: id };
    const existingSwitch = await Swtich.findOne(filter).select("switchThree");
    const updatedValue = !existingSwitch.switchThree;
    const update = { switchThree: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchThree: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const toggleSwitchFour = async (id, request, response) => {
  try {
    const filter = { _id: id };
    const existingSwitch = await Swtich.findOne(filter).select("switchFour");
    const updatedValue = !existingSwitch.switchFour;
    const update = { switchFour: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchFour: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const turnOfAllSwitches = async (id, request, response) => {
  try {
    const filter = { _id: id };
    const existingSwitches = await Swtich.findOne(filter);
    const updatedSwitches = {
      switchOne: false,
      switchTwo: false,
      switchThree: false,
      switchFour: false,
    };
    await Swtich.updateOne(filter, updatedSwitches);
    return response.json(updatedSwitches);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
/////////////////////////////////// 1.Switch //////////////////////////////
//turn false to all switches for ottparty
export const turnOffAllSwitches = async (request, response) => {
  turnOfAllSwitches("6468ae89ffe7e4076bb1b45d", request, response);
};
//switchOne toggle
export const toggleSwtichOne = async (request, response) => {
  toggleSwitchOne("6468ae89ffe7e4076bb1b45d", request, response);
};
//switchTwo toggle
export const toggleSwtichTwo = async (request, response) => {
  toggleSwitchTwo("6468ae89ffe7e4076bb1b45d", request, response);
};
//switchThree toggle
export const toggleSwtichThree = async (request, response) => {
  toggleSwitchThree("6468ae89ffe7e4076bb1b45d", request, response);
};
//switchFour toggle
export const toggleSwtichFour = async (request, response) => {
  toggleSwitchFour("6468ae89ffe7e4076bb1b45d", request, response);
};
/////////////////////////////////////////////////////////////////

//////////////////////// 2.Switch (trueadblocker) ///////////////
export const offAllSwTrueAdblocker = async (request, response) => {
  turnOfAllSwitches("647d6e03761f4e27cec10825", request, response);
};
export const toggleSwOneTADB = async (request, response) => {
  toggleSwitchOne("647d6e03761f4e27cec10825", request, response);
};
export const toggleSwTwoTADB = async (request, response) => {
  toggleSwitchTwo("647d6e03761f4e27cec10825", request, response);
};
export const toggleSwThreeTADB = async (request, response) => {
  toggleSwitchThree("647d6e03761f4e27cec10825", request, response);
};
export const toggleSwFourTADB = async (request, response) => {
  toggleSwitchFour("647d6e03761f4e27cec10825", request, response);
};
/////////////////////////////////////////////////////////////////
//////////////////////// 2.Switch (Ottparty) ///////////////
export const offAllSwOttParty = async (request, response) => {
  turnOfAllSwitches("647d7803761f4e27cec10829", request, response);
};
export const toggleSwOneOttParty = async (request, response) => {
  toggleSwitchOne("647d7803761f4e27cec10829", request, response);
};
export const toggleSwTwoOttParty = async (request, response) => {
  toggleSwitchTwo("647d7803761f4e27cec10829", request, response);
};
export const toggleSwThreeOttParty = async (request, response) => {
  toggleSwitchThree("647d7803761f4e27cec10829", request, response);
};
export const toggleSwFourOttParty = async (request, response) => {
  toggleSwitchFour("647d7803761f4e27cec10829", request, response);
};
/////////////////////////////////////////////////////////////////
