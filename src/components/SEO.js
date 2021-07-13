import React from "react";
import { Helmet } from "react-helmet";
import { siteUrl } from "../utils/constants";
import image from "../assets/logo2.png";

const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={twitterUsername} /> */}
      <meta name="twitter:title" content="PC-Home" />
      {/* <meta name="twitter:description" content={siteDesc} /> */}
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
