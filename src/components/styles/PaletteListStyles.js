import sizes from "./sizes";

export const PaletteListStyles = {
  root: {
    backgroundColor: "royalblue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
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
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  }
};
