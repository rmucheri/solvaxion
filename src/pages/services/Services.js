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
        desc="SaaS experts often have a deep understanding of the underlying technology that powers SaaS applications, including cloud computing, web services, and software development frameworks. They may also have expertise in specific SaaS applications, such as customer relationship management (CRM) software or enterprise resource planning (ERP) systems.."
      />
      <FeatureTwo />
      <TestimonialTwo bgWhite />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Services;
