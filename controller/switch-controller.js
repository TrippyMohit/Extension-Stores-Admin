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

//turn false to all switches
export const turnOffAllSwitches = async (request, response) => {
  try {
    const filter = { _id: "6468ae89ffe7e4076bb1b45d" };
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

//switchOne toggle
export const toggleSwtichOne = async (request, response) => {
  try {
    const filter = { _id: "6468ae89ffe7e4076bb1b45d" };
    const existingSwitch = await Swtich.findOne(filter).select("switchOne");
    const updatedValue = !existingSwitch.switchOne;
    const update = { switchOne: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchOne: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
//switchTwo toggle
export const toggleSwtichTwo = async (request, response) => {
  try {
    const filter = { _id: "6468ae89ffe7e4076bb1b45d" };
    const existingSwitch = await Swtich.findOne(filter).select("switchTwo");
    const updatedValue = !existingSwitch.switchTwo;
    const update = { switchTwo: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchTwo: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
//switchThree toggle
export const toggleSwtichThree = async (request, response) => {
  try {
    const filter = { _id: "6468ae89ffe7e4076bb1b45d" };
    const existingSwitch = await Swtich.findOne(filter).select("switchThree");
    const updatedValue = !existingSwitch.switchThree;
    const update = { switchThree: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchThree: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
//switchFour toggle
export const toggleSwtichFour = async (request, response) => {
  try {
    const filter = { _id: "6468ae89ffe7e4076bb1b45d" };
    const existingSwitch = await Swtich.findOne(filter).select("switchFour");
    const updatedValue = !existingSwitch.switchFour;
    const update = { switchFour: updatedValue };
    await Swtich.updateOne(filter, update);
    return response.json({ switchFour: updatedValue });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
