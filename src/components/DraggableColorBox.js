import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.9px",
    "&:hover button": {
      opacity: 1
    }
  }
};

const DraggableColorBox = ({ color, classes }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
