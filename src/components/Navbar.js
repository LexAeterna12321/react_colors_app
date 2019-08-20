import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./Navbar.css";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { formatValue: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ formatValue: e.target.value }, () => {
      this.props.changeFormat(this.state.formatValue);
    });
  }
  render() {
    const { formatValue } = this.state;
    const { level, changeLevel } = this.props;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="#!">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <div className="slider">
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
        <div className="select-container">
          <Select value={formatValue} onChange={this.handleChange}>
            <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
            <MenuItem value={"rgb"}>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value={"rgba"}>RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}

export default Navbar;
