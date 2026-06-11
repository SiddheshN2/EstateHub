import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Property from "../models/property.model.js";
import User from "../models/user.model.js";
import { propertiesData, usersData } from "./data.js";

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  try {
    await Property.deleteMany();
    await User.deleteMany();

    // hash demo password
    const hashedPassword = await bcrypt.hash("Demo@123", 10);

    // replace passwords before inserting
    const updatedUsers = usersData.map((user) => ({
      ...user,
      password: hashedPassword,
    }));

    const users = await User.insertMany(updatedUsers);

    const seller = users.find(
      (user) => user.email === "seller@gmail.com"
    );

    const updatedProperties = propertiesData.map((property) => ({
      ...property,
      seller: seller._id,
    }));

    await Property.insertMany(updatedProperties);

    console.log("Users + Properties Seeded Successfully");

    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seed();