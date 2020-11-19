import React from "react";
import "../stylesheets/Banner.scss";

export default ({
  mainText,
  secondaryText,
}: {
  mainText: string;
  secondaryText: string;
}) => {
  return (
    <div className="banner">
      <h1 className="primary">{mainText}</h1>
      <h2 className="secondary">{secondaryText}</h2>
    </div>
  );
};
