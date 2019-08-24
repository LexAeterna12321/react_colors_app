import React from "react";
import { PaletteFooterStyles } from "./styles";
import { withStyles } from "@material-ui/styles";

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(PaletteFooterStyles)(PaletteFooter);
