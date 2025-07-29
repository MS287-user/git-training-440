import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeProvider from "./components/ThemeContext";

const ThemedApp = () => {
  return (
    <>
      {AOS.init()}
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>

      </BrowserRouter>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )

}

export default App;
