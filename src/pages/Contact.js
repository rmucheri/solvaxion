import React from "react";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FooterOne from "../layout/Footer/FooterOne";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="Solvaxion - SaaS Solutions" />
      <Navbar navDark />
      <PageHeader
        title="Contact Us"
        desc="Get in touch with us today we are ready to help you achieve success using technology"
      />
      <ContactBox />
      <ContactFormTwo />
      <FooterOne
      // style={{
      //   background:
      //     "url('assets/img/page-header-bg.svg')no-repeat bottom right",
      // }}
      />
    </Layout>
  );
};

export default Contact;
