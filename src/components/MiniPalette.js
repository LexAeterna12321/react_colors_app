import React from "react";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { withStyles } from "@material-ui/styles";
import { MiniPaletteStyles } from "./styles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, goToPalette } = props;

  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: `${color.color}` }}
    />
  ));

  return (
    <div className={classes.root} onClick={goToPalette}>
      <div className={classes.delete}>
        <DeleteForeverSharpIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
