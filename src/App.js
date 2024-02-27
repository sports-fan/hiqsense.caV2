import React from "react";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import CatchAllRoute from "./components/BuilderIo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";

// Sections Import Start
import AOS from "aos";
import "aos/dist/aos.css";

import theme from "./Theme";
import Service from "./components/Service";

export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/services" element={<Service />} />
            <Route path="/about"  element={<AboutUs />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
