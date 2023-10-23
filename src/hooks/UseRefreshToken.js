import axios from "../api/axios";
import useAuth from "./useAuth";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accesToken);
      return { ...prev, accesToken: response.data.accesToken };
    });

    return response.data.accesToken;
  };

  return refresh;
};

export default UseRefreshToken;
