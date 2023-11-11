import React, {useMemo, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Acount from "./pages/Acount";

function App() {


  return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/acount" element={<Acount/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
