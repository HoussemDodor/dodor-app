import { useState, useEffect } from "react";

//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log(userName);
  }, [userName])

  return (
    <section>
      <div className="bg-red">
        <h1 className="text-3xl font-bold underline">Log In</h1>
        <form>
          <label>Gebruikersnaam:</label>
          <br />
          <input type="text" onChange={(e) => setUserName(e.target.value)}/>
          <br />
          <label>Wachtwoord:</label>
          <br />
          <input type="password" onChange={(e) => setUserName(e.target.value)}/>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
