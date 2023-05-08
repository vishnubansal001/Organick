import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AboutUs from "../pages/AboutUsPage/AboutUs";
import Shop from "../pages/ShopPage/Shop";
import Protected from "../pages/ProtectedPage/Protected";
import ChangeLog from "../pages/ChangeLogPage/ChangeLog";
import OurTeam from "../pages/OurTeamPage/OurTeam";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/protected" element={<Protected />}></Route>
        <Route exact path="/changelog" element={<ChangeLog/>}></Route>
        <Route exact path="/our-team" element={<OurTeam/>}></Route>
      </Routes>
    </>
  );
};

export default Router;
