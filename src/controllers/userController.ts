import { Request, Response } from "express";
import axios from "axios";
import { User } from "../models/userModel";

export const loadUsers = async (req: Request, res: Response) => {
  try {
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
    await User.insertMany(users);
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to load users" });
  }
};
