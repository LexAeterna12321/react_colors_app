import React from "react";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { withStyles } from "@material-ui/styles";
import { MiniPaletteStyles } from "./styles";

function MiniPalette(props) {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    goToPalette,
    deletePalette,
    id
  } = props;

  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: `${color.color}` }}
    />
  ));

  const handlePaletteDelete = e => {
    e.stopPropagation();
    deletePalette(id);
  };

  return (
    <div className={classes.root} onClick={goToPalette}>
      <DeleteForeverSharpIcon
        className={classes.deleteIcon}
        onClick={handlePaletteDelete}
      />

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
