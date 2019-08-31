import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navBtns: {
    marginRight: "1rem"
  },
  button: {
    margin: "0 0.5rem"
  },
  link: {
    textDecoration: "none"
  }
}));

const PaletteFormNav = ({ open, setOpen, palettes, handleSubmit }) => {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [isFormShowing, setIsFormShowing] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  function handleDrawerOpen() {
    setOpen(true);
  }

  const handleChange = e => {
    setNewPaletteName(e.target.value);
  };

  const showForm = () => {
    setIsFormShowing(true);
  };
  const hideForm = () => {
    setIsFormShowing(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Your Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/" className={classes.link}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={showForm}
          >
            Save Your Palette
          </Button>
        </div>
        {isFormShowing && (
          <PaletteMetaForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            newPaletteName={newPaletteName}
            hideForm={hideForm}
          />
        )}
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
