import sizes from "./sizes";
export const SingleColorPaletteStyles = {
  goBackBox: {
    marginBottom: "-3.9px",
    height: "50%",
    backgroundColor: "black",
    position: "relative",
    width: "20%",
    display: "inline-block",
    [sizes.down("lg")]: {
      width: "50%",
      height: "33.3333333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  },
  goBackButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, .3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: "#fff",
    border: "none",
    transition: "all .5s",
    cursor: "pointer",
    textDecoration: "none"
  },
  Palette: {
    height: "100vh",
    flexDirection: "column",
    display: "flex",
    overflow: "hidden",
    position: "relative"
  },

  PaletteColors: {
    height: "90%"
  }
};
