import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import CartContext from "./components/CartContext";
import { BrowserRouter } from "react-router-dom";

const rawItems = localStorage.getItem("my_cart");
const items = rawItems ? JSON.parse(rawItems) : [];

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CartContext.Provider value={items}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
