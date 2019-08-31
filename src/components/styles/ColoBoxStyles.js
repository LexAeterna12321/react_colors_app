import chroma from "chroma-js";

export const ColorBoxStyles = {
  ColorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.07 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    background: "rgba(255, 255, 255, .3)",
    position: "absolute",
    border: "none",
    right: 0,
    bottom: 0,
    color: props =>
      chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,.6)" : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px"
  },
  copyButton: {
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
    color: props =>
      chroma(props.background).luminance() >= 0.04 ? "black" : "white",
    border: "none",
    transition: "all .5s",
    cursor: "pointer",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: 0,
    bottom: 0,
    color: "#000",
    letterSpacing: "1px",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    transform: "scale(0.1)"
  },
  showOverlay: {
    position: "absolute",
    opacity: 1,
    transform: "scale(50)",
    zIndex: 10,
    transition: "opacity .6s ease-in-out, transform .8s ease-in-out"
  },
  copyMsg: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: 0,
    color: "#fff",
    "& h1": {
      fontWeight: 400,
      textXhadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: 0,
      padding: "1rem"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: 100
    }
  },
  showMsg: {
    transform: "scale(1)",
    opacity: 1,
    zIndex: 25,
    transition: "all .4s .3s ease-in-out"
  }
};
