import React from "react";
import Button from "material-ui/Button";
import NavBar from "./NavBar";
import FontAwesome from "react-fontawesome";
import Logo from "../common/XelectricLogo.png";

const Home = () => (
  <div className="home">
    <div className="hero">
      <img src={Logo}  className="heroLogo" />
    </div>
    <NavBar />
    <div className="content">
      <div className="header1 header">
        <h2>Custom Design</h2>
      </div>
      <div className="content1 contentBody">
        <FontAwesome className="fa-wrench" size="3x" />
        <br />
        <br />
        We custom design and install power generation and storage systems,
        scaled for a wide range of power requirements.
      </div>
      <div className="header2 header">
        <h2>Installation Coverage</h2>
      </div>
      <div className="content2 contentBody">
        <FontAwesome className="fa-map" size="3x" />
        <br />
        <br />
        We offer installation anywhere in Saskatchewan, soon branching out to
        Western Canada. Quarterly maintenance of all installations is standard.
      </div>
      <div className="header3 header">
        <h2>Affordable Pricing</h2>
      </div>
      <div className="content3 contentBody">
        <FontAwesome className="fa-usd" size="3x" />
        <br />
        <br />
        We offer affordable financing options for sale, leasing and rental of
        our products. Our products include easy-install solar and wind power, as
        well as stackable Lithium ion battery packs.
      </div>
    </div>
  </div>
);

export default Home;
