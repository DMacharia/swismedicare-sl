import React from "react";
import "./home.css";

import MainSection from "./mainsection";
import Services from "./services";
import Testimonials from "./testimonials";

export default function Landing() {
  return (
    <main className="main">
      <MainSection />
      <Services />
      <Testimonials />
    </main>
  );
}
