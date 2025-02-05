import axios from "axios";

export const refreshToken = async (token: string) => {
  const refresh_token = await axios.get(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_acces_token?grant_type=ig_refresh_tiken&acces_token=${token}`
  );
  return refresh_token.data;
};
