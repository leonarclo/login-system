import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/vaildate", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 1, name: "Leonardo", email: "leonardo@gmail.com" },
      token: "123456",
    };
    // const response = await api.post("/signin", { email, password });
    // return response.data;
  },
  signout: async () => {
    const response = await api.post("/signout");
    return response.data;
  },
});
