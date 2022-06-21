import axios from "axios";
import { BASE_URL } from "src/configs/indext";

export const createChatRoom = async (name: string) => {
  try {
    return await axios.post(`${BASE_URL}/chat/room`, { name });
  } catch (error) {
    return error;
  }
};
