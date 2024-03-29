export const MiniPaletteStyles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "opacity .2s, box-shadow .2s",

    "&:hover svg": {
      opacity: 1
    },
    "&:hover": {
      boxShadow: "0 0 8px 1px rgba(255,255,255,.5)"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px"
  },

  deleteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    color: "#ddd",
    backgroundColor: "#eb3d30",
    width: "40px",
    height: "40px",
    borderBottomLeftRadius: "5px",
    padding: "7px",
    boxShadow: "-1px 1px 3px 2px rgba(0,0,0,.5)",
    opacity: 0,
    transition: "opacity .2s,color .2s",
    "&:hover": {
      color: "#fff"
    }
  }
};
