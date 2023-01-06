import React from "react";
import BlogGrid from "../../components/blog/BlogGrid";
import PageHeader from "../../components/common/PageHeader";
import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const Blogs = () => {
  return (
    <Layout>
      <PageMeta title="Solvaxion - Saas Solutions -" />
      <Navbar navDark />
      <PageHeader
        title="Our Latest News and Blogs"
        desc="Stay Up-to-Date with the Latest Industry Insights and Company Updates"
        blogtags
      />
      <BlogGrid />
      <FooterOne
        // style={{
        //   background:
        //     "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        // }}
      />
    </Layout>
  );
};

export default Blogs;
