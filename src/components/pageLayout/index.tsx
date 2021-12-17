import React, { FC } from "react";
import "./style.css";

const PageLayout: FC = ({ children }) => {
  return <main role="main">{children}</main>;
};

export default PageLayout;
