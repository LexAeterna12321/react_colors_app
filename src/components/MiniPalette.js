import React, { memo } from "react";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { withStyles } from "@material-ui/styles";
import { MiniPaletteStyles } from "./styles";

const MiniPalette = memo(props => {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    goToPalette,
    openDialog,
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
    openDialog(id);
  };

  const handleClick = () => goToPalette(id);

  return (
    <div className={classes.root} onClick={handleClick}>
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
});

export default withStyles(MiniPaletteStyles)(MiniPalette);
