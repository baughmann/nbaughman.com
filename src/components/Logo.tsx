import React from "react";
import "../stylesheets/Logo.scss"

export default ({ text }: { text: string }) => (
  <div className="logo">{text}</div>
);
