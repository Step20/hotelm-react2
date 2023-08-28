import React from "react";
import Home from "../components/HomeComponent";
import Suite from "../components/SuiteComponent";
import Best from "../components/BestComponent";
import Under from "../components/UnderComponent";
import Last from "../components/LastComponent";
import Footer from "../components/FooterComponent";

export default function Main() {
  return (
    <div>
      <Home />
      <Suite />
      <Best />
      <Under />
      <Last />
      <Footer />
    </div>
  );
}
