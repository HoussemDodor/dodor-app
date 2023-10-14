import { useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import axios from "./api/axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(pwd);
  }, [pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handling submit");
    try {
      const response = await axios.post("/auth/login", { username, pwd });

      // Login succes, save authentication info
      console.log(response?.data);
      const accesToken = response?.data?.accesToken;
      const roles = response?.data?.roles;

      setAuth({ username, pwd, roles, accesToken });
      //setPwd("");
      //setUsername("");
    } catch (err) {
      if (!err?.response) {
        console.log("ERROR: no server response");
      } else if (err.response?.status === 400) {
        console.log("ERROR 400: Missing username or password");
      } else if (err.response?.status === 401) {
        console.log("ERROR 401: Unauthorized");
      } else {
        console.log("ERROR: Login failed");
      }
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-blue-300">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl block text-center font-semibold">Log In</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label className="block text-base mb-2" htmlFor="username">
              Gebruikersnaam:
            </label>
            <input
              type="text"
              id="username"
              className="border w-full rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Email of Gebruikersnaam..."
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label className="block text-base mb-2" htmlFor="password">
              Wachtwoord:
            </label>
            <input
              type="password"
              id="password"
              className="border w-full rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Uw wachtwoord..."
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>

          <button className="border-2 border-blue-700 bg-blue-700 text-white py-1 w-full rounded-md hover:bg-blue-300 mt-3">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
