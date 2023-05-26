import User from "../schema/user-schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
//Register user
export const registerUser = async (request, response) => {
  const { username, password } = request.body;
  const user = await User.findOne({ username });
  if (user) {
    return response.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  response.json({
    message:
      "Admin registered successfully! Now you can Login with new admin credentials",
  });
};

// Login user
export const loginUser = async (request, response) => {
  const { username, password } = request.body;
  const user = await User.findOne({ username });
  if (!user) {
    return response
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return response.status(400).json({
      message: "Username or password is incorrect",
    });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  response.json({ token, userID: user._id });
};

export const verfiyToken = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (authHeader) {
    jwt.verfiy(authHeader, TXlTZWNyZXRTdHJpbmc, (err) => {
      if (err) {
        return response.sendStatus(403);
      }

      next();
    });
  } else {
    response.sendStatus(401);
  }
};
