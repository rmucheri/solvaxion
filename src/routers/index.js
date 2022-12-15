import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSassOne from "../themes/index1/HomeSassOne";
import HomeSassTwo from "../themes/index2/HomeSassTwo";
import Services from "../pages/services/Services";
import SingleService from "../pages/services/SingleService";
import Login from "../pages/onboard/Login";
import NotFoundScreen from "../components/others/NotFoundScreen";
import HomeDesktopApp from "../themes/index3/HomeDesktopApp";
import PasswordReset from "../pages/onboard/PasswordReset";
import Pricing from "../pages/Pricing";
import ScrollToTop from "../components/common/ScrollToTop";
import HomeAppLanding from "../themes/index4/HomeAppLanding";
import HomeSoftApplication from "../themes/index5/HomeSoftApplication";
import HomeStartup from "../themes/index6/HomeStartup";
import HomeDataAnalysis from "../themes/index7/HomeDataAnalysis";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ComingSoon from "../pages/ComingSoon";
import Integrations from "../pages/integration/Integrations";
import IntegrationSingle from "../pages/integration/IntegrationSingle";
import Blogs from "../pages/blog/Blogs";
import SingleBlog from "../pages/blog/SingleBlog";
import Career from "../pages/career/Career";
import CareerSingle from "../pages/career/CareerSingle";
import HelpCenter from "../pages/help-center/HelpCenter";
import SingleHelpCenter from "../pages/help-center/SingleHelpCenter";
import Signup from "../pages/onboard/Signup";
import RequestDemo from "../pages/RequestDemo";
import HomeAppTwo from "../themes/index8/HomeAppTwo";
import HomeNine from "../themes/index9/HomeNine";
import HomeTen from "../themes/index10/HomeTen";
import SingleProduct from "../pages/product/SingleProduct";
import SinglePortfolio from "../pages/SinglePortfolio";
import HomeEleven from "../themes/index11/HomeEleven";
import HomeTwelve from "../themes/index12/HomeTwelve";
import HomeThirteen from "../themes/index13/HomeThirteen";
import HomeFourteen from "../themes/index14/HomeFourteen";
import HomeFifteen from "../themes/index15/HomeFifteen";

function index() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomeSoftApplication />} />
        <Route exact path="/home-sass-two" element={<HomeSassTwo />} />
        <Route exact path="/home-desktop-app" element={<HomeDesktopApp />} />
        <Route exact path="/home-app-landing" element={<HomeAppLanding />} />
        <Route exact path="/home-soft-app" element={<HomeSassOne />} />
        <Route exact path="/home-startup" element={<HomeStartup />} />
        <Route
          exact
          path="/home-data-analysis"
          element={<HomeDataAnalysis />}
        />
        <Route exact path="/home-nine" element={<HomeNine />} />
        <Route exact path="/home-ten" element={<HomeTen />} />
        <Route exact path="/home-eleven" element={<HomeEleven />} />
        <Route exact path="/home-thirteen" element={<HomeThirteen />} />
        <Route exact path="/home-fourteen" element={<HomeFourteen />} />
        <Route exact path="/home-fifteen" element={<HomeFifteen />} />
        <Route exact path="/home-twelve" element={<HomeTwelve />} />
        <Route exact path="/home-app-two" element={<HomeAppTwo />} />
        <Route exact path="/home-nine" element={<HomeNine />} />
        <Route exact path="/home-ten" element={<HomeTen />} />
        <Route exact path="/single-product" element={<SingleProduct />} />
        <Route exact path="/portfolio-single" element={<SinglePortfolio />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/single-service" element={<SingleService />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-single" element={<SingleBlog />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/career-single" element={<CareerSingle />} />
        <Route exact path="/help-center" element={<HelpCenter />} />
        <Route
          exact
          path="/help-center-single"
          element={<SingleHelpCenter />}
        />
        <Route exact path="/password-reset" element={<PasswordReset />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/request-for-demo" element={<RequestDemo />} />
        <Route exact path="/coming-soon" element={<ComingSoon />} />
        <Route exact path="/integrations" element={<Integrations />} />
        <Route
          exact
          path="/integration-single"
          element={<IntegrationSingle />}
        />
        <Route element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
