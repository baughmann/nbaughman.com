import { link } from "fs";
import React from "react";

export enum Icons {
  GITHUB,
  LINKEDIN,
  RESUME,
}

export default ({
  icon,
  backgroundColor,
  foregroundColor,
  height,
  width,
  linkTo,
}: {
  icon: Icons;
  backgroundColor?: string;
  foregroundColor?: string;
  height?: string;
  width?: string;
  linkTo?: string;
}) => {
  foregroundColor = foregroundColor ? foregroundColor : "#FFF";
  backgroundColor = backgroundColor ? backgroundColor : "#000";
  height = height ? height : "48";
  width = width ? width : "48";

  const getIcon = () => {
    switch (icon) {
      default:
      case Icons.LINKEDIN:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 48 48"
          >
            <path
              fill={backgroundColor}
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            />
            <path
              fill={foregroundColor}
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            />
          </svg>
        );
      case Icons.GITHUB:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 48 48"
          >
            <path
              fill={backgroundColor}
              d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1H21zm19.1-14.6s-1.3-.4-2.4-.4h-.1c-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1s0-.1.1-.1 2-.3 3.1-.3 2.4.4 2.5.4c.1 0 .1.1.1.2-.2-.1-.2 0-.3 0zm-.3.8s-1.4-.4-2.6-.4c-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1s0-.1.1-.1 2.2-.2 3.1-.2c1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2 0-.1 0 0-.1 0zm-32-.8c-.1 0-.1 0-.1-.1s0-.1.1-.2c.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1s-2.7-.2-3.5-.2c-1.1.2-2.6.4-3.4.6zm.4 1.5s-.1 0-.1-.1v-.2c.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1s-2.8-.3-4.1-.1c-1.5.3-2.9 1.1-2.9 1.1z"
            />
            <path
              fill={backgroundColor}
              d="M14.2 23.5c0-4.4 4.6-8.5 10.3-8.5 5.7 0 10.3 4 10.3 8.5S31.5 31 24.5 31s-10.3-3.1-10.3-7.5z"
            />
            <path
              fill={backgroundColor}
              d="M28.6 16.3s1.7-2.3 4.8-2.3c1.2 1.2.4 4.8 0 5.8l-4.8-3.5zm-8.2 0S18.7 14 15.6 14c-1.2 1.2-.4 4.8 0 5.8l4.8-3.5zm-.3 19.6h-2.8c-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9l-.6 3z"
            />
          </svg>
        );
      case Icons.RESUME:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 48 48"
          >
            <path fill={backgroundColor} d="M8 3H40V45H8z" />
            <path
              fill={foregroundColor}
              d="M20,12.5c0,1.38-1.119,2.5-2.5,2.5S15,13.88,15,12.5c0-1.381,1.119-2.5,2.5-2.5S20,11.119,20,12.5 M22,18.329c0,0-1.246-2.329-4.5-2.329c-3.255,0-4.5,2.329-4.5,2.329V20h9V18.329z M35,12h-9v2h9V12z M35,17h-9v2h9V17z M35,26h-5v2h5V26z M35,31h-5v2h5V31z M27,26H13v2h14V26z M35,36h-5v2h5V36z M27,36H13v2h14V36z M24,31H13v2h11V31z"
            />
          </svg>
        );
    }
  };

  return linkTo ? (
    <a target="_blank" href={linkTo}>
      {getIcon()}
    </a>
  ) : (
    getIcon()
  );
};
