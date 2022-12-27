import React from "react";
import PageHeader from "../../components/common/PageHeader";
import CtaTwo from "../../components/cta/CtaTwo";
import FeatureTwo from "../../components/features/FeatureTwo";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const Services = () => {
  return (
    <Layout>
      <Navbar navDark />
      <PageHeader
        title="We are Saas Experts"
        desc="Let us help you streamline your operations and drive success."
      />
      <FeatureTwo />
      {/* <TestimonialTwo bgWhite /> */}
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Services;
