import React from "react";
import LatestBlogTwo from "../../components/blog/LatestBlogTwo";
import PageMeta from "../../components/common/PageMeta";
import CtaSubscribe from "../../components/cta/CtaSubscribe";
import CtaThree from "../../components/cta/CtaThree";
import FeatureImgSeven from "../../components/features/FeatureImgSeven";
import FeatureImgSix from "../../components/features/FeatureImgSix";
import HeroFive from "./HeroFive";
import IntegrationTwo from "../../components/integration/IntegrationTwo";
import PromoTwo from "../../components/promo/PromoTwo";
import TabOne from "../../components/tabs/TabOne";
import TechTab from "../../components/tabs/TechTab";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import WorkProcessFour from "../../components/work-process/WorkProcessFour";
import WorkProcess from "../../components/work-process/WorkProcess";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const HomeSoftApplication = () => {
  return (
    <Layout extraClass="overflow-hidden">
      <PageMeta title="Solvaxion - Software" />
      <Navbar />
      <HeroFive />
      <PromoTwo />
      {/* <TabOne /> */}
      <TechTab />
      {/* <FeatureImgSix /> */}
      {/* <FeatureImgSeven /> */}
      {/* <CtaThree /> */}
      {/* <WorkProcessFour /> */}
      <WorkProcess />
      {/* <TestimonialTwo />
      <CtaSubscribe />
      <IntegrationTwo />
      <LatestBlogTwo /> */}
      <FooterOne
        // style={{
        //   background:
        //     "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        // }}
      />
    </Layout>
  );
};

export default HomeSoftApplication;
