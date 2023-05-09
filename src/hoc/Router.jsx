import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AboutUs from "../pages/AboutUsPage/AboutUs";
import Shop from "../pages/ShopPage/Shop";
import Protected from "../pages/ProtectedPage/Protected";
import ChangeLog from "../pages/ChangeLogPage/ChangeLog";
import OurTeam from "../pages/OurTeamPage/OurTeam";
import RecentNews from "../pages/RecentNewsPage/RecentNews";
import ShopSingle from "../pages/ShopSinglePage/ShopSingle";
import Services from "../pages/ServicesPage/Services";
import Licenses from "../pages/LicensesPage/Licenses";
import NotFound from "../pages/NotFoundPage/NotFound";
import Quality from "../pages/QualityPage/Quality";
import Portfolio from "../pages/PortfolioPage/Portfolio";
import PortfolioSingle from "../pages/PortfolioSinglePage/PortfolioSingle";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/protected" element={<Protected />}></Route>
        <Route exact path="/changelog" element={<ChangeLog />}></Route>
        <Route exact path="/our-team" element={<OurTeam />}></Route>
        <Route exact path="/recent-news" element={<RecentNews />}></Route>
        <Route exact path="/shop-single" element={<ShopSingle />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/licences" element={<Licenses />}></Route>
        <Route exact path="/page-not-found" element={<NotFound />}></Route>
        <Route exact path="/quality" element={<Quality />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/portfolio-single" element={<PortfolioSingle />}></Route>
      </Routes>
    </>
  );
};

export default Router;
