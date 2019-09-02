import sizes from "./sizes";

export const NavbarStyles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "6vh"
  },

  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto, sans-serif",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },

    "&  .rc-slider-rail": {
      height: "8px"
    },
    [sizes.down("md")]: {
      width: "150px"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: ".7rem"
  }
};
