import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Footer } from "../pages/footer";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#portfolio" element={<Portfolio />} />
        <Route path="#contact" element={<ContactUs />} />
        <Route path="#footer" element={<Footer/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
