import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
const Router = () => {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
    </Routes>
    </>
  )
}

export default Router