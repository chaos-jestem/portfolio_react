import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <HelmetProvider>
      <section id="footer" className="footer">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="footer mt-5 d-lg-flex d-block align-items-center">
          <div className="footer-div">
            <div className="align-self-center">
                <h3 className="color_sec py-4">Jan Papkiewicz © 2024</h3>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
