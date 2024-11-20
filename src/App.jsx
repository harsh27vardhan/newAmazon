import { StrictMode } from "react";
import "./index.css";
import Header from "./header/header.jsx";
import Card from "./cardcomponents/Cardcomponent.jsx";
import Filter from "./filterbar/filterbar.jsx";
import Carousal from "./carousal/carousal.jsx";
import Signin from "./signin/signin.jsx";
import Cart from './cart/cart.jsx'
import Search from './sidebar/search.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { createContext, useState } from "react";

const layout =(element)=>{
  return (
    <>
      <Header/>
      {element}
    </>
  )
}

const ThemeContext = createContext();
const CartContext = createContext();

export default function App() {
  return (
    <StrictMode>
        <BrowserRouter>
      <Routes>
        <Route
              path="/"
              element={
                <>
                  <Header />
                  <Filter />
                  <Carousal />
                  <Card />
                </>
              }
            />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={layout(<Cart/>)} />
        <Route path="/search" element={layout(<Search />)} />
        <Route path="/search/abc" element={layout(<Search />)} />
        <Route
          path="/search/:searchId/:eview/:reviewId"
          element={layout(<Search />)}
        /> 
        <Route path="/product" element={layout(<>Product</>)} />
        <Route
          path="/product/:productId"
          element={layout(<>Product Dynamic</>)}
        />
         <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  )
}

export { ThemeContext, CartContext };

