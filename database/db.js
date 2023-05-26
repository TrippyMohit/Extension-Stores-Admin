import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async () => {
  // const URL = process.env.MONGOURI;
  const URL =
    "mongodb+srv://mohit:mohit0000@extension-stores-admin.4nrsm42.mongodb.net/?retryWrites=true&w=majority";

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;
