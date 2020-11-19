import React from "react";
import Icon, { Icons } from "./icons/Icon";
import "../stylesheets/SocialLink.scss";

export default ({
  icon,
  text,
  url,
}: {
  icon: Icons;
  text: string;
  url: string;
}) => (
  <a className="social-link" target="_blank" href={url}>
    <Icon icon={icon} backgroundColor="#FFF" foregroundColor="#000" />
    <h1>{text}</h1>
  </a>
);
