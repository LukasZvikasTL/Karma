import axios from "axios";
import { User } from "../model/User";

export const getPurchase = async (id: string) => {
  try {
    return await axios.get(
      `http://localhost:3000/getPurchase?purchaseId=${id}`
    );
  } catch (err) {
    console.log("err", err);
  }
};
