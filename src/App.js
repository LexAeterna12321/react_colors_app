import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./utils/seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./utils/colorHelpers";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  constructor(props) {
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    super(props);
    this.state = {
      palettes: savedPalettes || seedColors
    };
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
  }

  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePalette = async newPalette => {
    await this.setState({ palettes: [...this.state.palettes, newPalette] });
    this.syncLocalStorage();
  };

  deletePalette = id => {
    this.setState(
      state => {
        return {
          palettes: state.palettes.filter(palette => palette.id !== id)
        };
      },
      () => this.syncLocalStorage()
    );
  };

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    const { palettes } = this.state;
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500} key={location.key}>
              <Switch location={location}>
                <Route
                  path="/palette/new"
                  exact
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/palette/:id"
                  exact
                  render={routeProps => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/palette/:paletteId/:colorId"
                  exact
                  render={routeProps => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
