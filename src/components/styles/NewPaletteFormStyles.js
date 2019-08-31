import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "./variables";

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    alignSelf: "flex-end",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -DRAWER_WIDTH
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%"
  }
}));
