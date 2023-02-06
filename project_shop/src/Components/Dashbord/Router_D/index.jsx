import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProductPage } from "../Pages/ProductPage";
import { EditPage } from "../Pages/EditPage";
import { DashboardPage } from "../Pages/DasgboardPage";

export const Router_D = () => {
  return (
    <Routes>
      <Route path="" element={<DashboardPage/>} />
      <Route path="product" element={<ProductPage />} />
      <Route path="edit" element={<EditPage />} />
    </Routes>
  );
};