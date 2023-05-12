import React from "react";
import { Routes, Route } from "react-router-dom";
import { LivePricing, Farms, RecentLaunches } from "../pages";
import routs from "../config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* livePricing  */}
      <Route path={routs.livePricing} element={<LivePricing />} />

      {/* Farms  */}
      <Route path={routs.farms} element={<Farms />} />

      {/* RecentLaunches  */}
      <Route path={routs.home} element={<RecentLaunches />} />
    </Routes>
  );
};

export default AppRoutes;
