import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage"));
const TechView = lazy(() => import("../pages/TechView"));
const ClothesView = lazy(() => import("../pages/ClothesView"));
const ProductDescription = lazy(() => import("./ProductDescription"));

export class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tech" element={<TechView />} />
        <Route path="/clothes" element={<ClothesView />} />
        <Route path="/pdp" element={<ProductDescription />} />
      </Routes>
    );
  }
}

export default Router;
