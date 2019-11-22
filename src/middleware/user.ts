import axios from "axios";
import { User } from "../model/User";

export const createUser = async (user: User) => {
  try {
    return await axios.post("/createUser", { user });
  } catch (err) {
    console.log("err", err);
  }
};
