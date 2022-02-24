import React from "react";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import MainPage from "./MainPage";
import {Route, Link, Routes, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}/>
        <Route path = "/mainpage" element = {<MainPage/>}/>
        <Route path = "/*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
