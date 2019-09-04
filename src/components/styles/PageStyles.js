export const PageStyles = {
  "@global": {
    ".page": {
      height: "100vh",
      width: "100%",
      position: "fixed",
      top: 0,
      transition: "opacity 0.5s ease-in-out"
    },

    ".page-enter": {
      opacity: 0
    },

    ".page-enter-active": {
      opacity: 1
    },

    ".page-exit-active": {
      opacity: 0
    }
  }
};
