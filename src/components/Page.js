import React from "react";
import { withStyles } from "@material-ui/styles";
import { PageStyles } from "./styles";

const Page = ({ children }) => {
  return <section className="page">{children}</section>;
};

export default withStyles(PageStyles)(Page);
