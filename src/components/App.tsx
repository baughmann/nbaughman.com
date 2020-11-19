import React from "react";
import "../stylesheets/App.scss";
import Banner from "./Banner";
import { Icons } from "./icons/Icon";
import Navbar from "./Navbar";
import SocialLink from "./SocialLink";

export default () => {
  return (
    <div className="app">
      <Navbar />
      <Banner
        mainText="Enterprise Software Professional:"
        secondaryText="Jack of all trades, master of none."
      />
      <div className="social-links">
        <SocialLink icon={Icons.GITHUB} text="GitHub" url="https://github.com/baughmann"/>
        <h1 className="resume">Resume Available Upon Request</h1>
        <SocialLink icon={Icons.LINKEDIN} text="LinkedIn" url="https://www.linkedin.com/in/baughmann/"/>
      </div>
    </div>
  );
};
