
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Basket from "./Pages/Basket/Basket";
import Wish from "./Pages/Wish/Wish";
import Detail from "./Pages/Detail/Detail";
import Admin from "./Pages/Admin/Admin";
import Add from "./Pages/Add/Add";
import {  HelmetProvider } from 'react-helmet-async';
import Mainprovider from "./context/Mainprovider";


function App() {

  return (
    <>
    <Mainprovider>

   
     <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Wish" element={<Wish />} />
          <Route path="Detail/:id" element={<Detail />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </Mainprovider>
    </>
  )
}

export default App
