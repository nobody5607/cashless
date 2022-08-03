import { ProfileResult } from "@/models/user.model";
import axios from "axios";

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
};
//get profile
export const getProfile = () => {
  const token = getToken();
  return new Promise(async (resolve, reject) => {
    try {
      const url = process.env.NEXT_PUBLIC_BASE_URL_API + "/account/profile";
      const response = await (
        await axios.get<any>(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      resolve(response.data);
    } catch ({ message }) {
      reject(message);
    }
  });
};
