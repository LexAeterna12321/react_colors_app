import React, { Component } from "react";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/styles";
import { NavbarStyles } from "./styles";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { formatValue: "hex", open: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleChange(e) {
    this.setState({ formatValue: e.target.value, open: true }, () => {
      this.props.changeFormat(this.state.formatValue);
    });
  }

  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { formatValue } = this.state;
    const { level, changeLevel, showingAllColors, classes } = this.props;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>

        {showingAllColors && (
          <div>
            <div className={classes.slider}>
              <span>Level: {level}</span>
              <Slider
                step={100}
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={formatValue} onChange={this.handleChange}>
            <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
            <MenuItem value={"rgb"}>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value={"rgba"}>RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To {this.state.formatValue.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(NavbarStyles)(Navbar);
