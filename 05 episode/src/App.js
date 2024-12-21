import React from "react";
import ReactDOM from "react-dom/client"; // Correctly import ReactDOM with 'client'
import Header from "./components/Header";
import Body from "./components/Body";

/*
  Low level designing of the app
   1--> Header
    - logo
    - Nav Items

  2--> Body
    - Res-container
      -Res-card
    
  3--> Footer
    - CopyRight
    - Address
    -Link
    - Contact Info

    */

const AppLayout = () => (
  <>
    <Header />
    <Body />/
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
