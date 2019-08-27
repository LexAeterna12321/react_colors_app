import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./utils/seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./utils/colorHelpers";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    };
  }

  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          path="/palette/new"
          exact
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          path="/palette/:id"
          exact
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          exact
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
