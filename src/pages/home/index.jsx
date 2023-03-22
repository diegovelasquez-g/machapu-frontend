import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../Context/AuthContext";

export const HomePage = () => {
  const { user } = useContext(AuthContext)
  return(
    <div>
      {user ? (
        <p>Hello {user.userName}</p>
      ) : (<h1>Hola mundo</h1>)}
    </div>
  );
};
