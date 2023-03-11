import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />}></Route>
    </Routes>
  );
};
