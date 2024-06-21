import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";
import { About } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { Footer } from "../pages/footer";

export default function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return () => {
          console.log('scroll', element.screenTop);
        };
        } 
      };
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Headermain />
        <AppRoutes />
        <About/>
        <Portfolio/>
        <ContactUs/>
        <Footer/>
    </Router>
  );
}
