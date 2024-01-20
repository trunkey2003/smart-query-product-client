import Axios from "./axios";

export const test = async ({ request, params, context }) => {
  try {
    const token = new URL(request.url).searchParams.get("token");
    const userID = new URL(request.url).searchParams.get("userID");
    const { data } = await Axios.get("/api/v1/auth/hello");
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Not welcome");
  }
};
