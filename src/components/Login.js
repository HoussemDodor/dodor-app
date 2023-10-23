import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, UseNavigate, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handling submit");
    try {
      const response = await axios.post("/auth/login", { username, pwd });

      console.log(response)

      // TODO CHECK BETTER FOR LOGIN
      // IF NO ERROR IS RETURNED LOGIN IS CONSIDERED SUCCESFULL
      if (!response.data.accesToken) return;

      // Login succes, save authentication info
      const accesToken = response?.data?.accesToken;
      const roles = response?.data?.roles;

      // after Login succes actions
      setAuth({ username, accesToken });
      setUsername("");
      setPwd("");
      navigate(from, { replace: true });

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
              autoComplete="off"
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
