import React from "react";
import Button from "material-ui/Button";
import NavBar from "./NavBar";
import FontAwesome from "react-fontawesome";
import Logo from "../common/XelectricLogo.png";
import Divider from "material-ui/Divider";

const Home = () => (
  <div className="home">
    <div className="hero">
      <img src={Logo} className="heroLogo" />
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
      <br />
      <br />
    </div>

    <Divider />

    <div className="content">
      <div>
        <h1>How we do it</h1>
        <br />
      </div>
      <div className="content1 contentBody">
        <FontAwesome className="fa-users" size="3x" />
        <br />
        <br />
        We make use of small teams made up of driven, innovative individuals to
        assemble our products and install our power systems. Within these teams
        are trained electricians to ensure all electrical connections are safe
        and up to code.
      </div>
      <div className="content2 contentBody">
        <FontAwesome className="fa-cog" size="3x" />
        <br />
        <br />
        We offer installation of systems owned by the customer, or custom design
        jobs, and at present time will travel with our tools and materials to
        any customer in Saskatchewan.
      </div>
      <div className="content3 contentBody">
        <FontAwesome className="fa-sun-o" size="3x" />
        <br />
        <br />
        Our panels and materials come from Canadian manufacturers, and we price
        our products and services at what we would consider fair and affordable.
        Our goal is to make these power systems accessible to all.
      </div>
    </div>
  </div>
);

export default Home;
