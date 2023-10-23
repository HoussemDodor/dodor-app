import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Users from "./Users"

const Home = () => {
  const {auth} = useAuth();
  return (
    <section>
      <h1 className="text-center text-green-500 font-bold capitalize text-lg">Welcome {auth.username}</h1>
      <Users />
    </section>
  );
};

export default Home;
