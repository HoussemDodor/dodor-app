import { useState, useEffect } from "react";

//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <section className="flex justify-center items-center h-screen bg-blue-300">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">Log In</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2">Gebruikersnaam:</label>
          <input
            type="text"
            id="username"
            className="border w-full rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Email of Gebruikersnaam..."
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">Wacthwoord:</label>
          <input
            type="password"
            id="password"
            className="border w-full rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Uw wachtwoord..."
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button className="border-2 border-blue-700 bg-blue-700 text-white py-1 w-full rounded-md hover:bg-blue-300 mt-3" type="submit">Log in</button>
      </div>
    </section>
  );
};

export default Login;
