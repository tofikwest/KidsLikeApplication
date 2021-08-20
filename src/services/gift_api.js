import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const getAllGifts = async () => {
  try {
    return await axios.get("/gift");
  } catch (error) {
    throw error;
  }
};

export const buyGiftIds = async (giftIds) => {
  try {
    return await axios.patch("/gift", giftIds);
  } catch (error) {
    throw error;
  }
};
