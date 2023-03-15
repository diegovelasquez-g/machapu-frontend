import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SignIn } from "./pages/Login/index";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />}></Route>
      <Route path="/SignIn" element={<SignIn />}></Route>
    </Routes>
  );
};
