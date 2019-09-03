import sizes from "./sizes";
import bg from "./bg.svg";
export const PaletteListStyles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#000022",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
    backgroundSize: "cover"
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    color: "white",
    margin: ".7rem 0",
    "& a": {
      color: "inherit"
    }
  },
  heading: { fontSize: "2rem" },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  }
};
