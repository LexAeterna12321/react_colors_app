import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./utils/colorHelpers";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import Page from "./components/Page";

import seedColors from "./utils/seedColors";

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
            <CSSTransition classNames="page" timeout={500} key={location.key}>
              <Switch location={location}>
                <Route
                  path="/palette/new"
                  exact
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={seedColors}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:id"
                  exact
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:paletteId/:colorId"
                  exact
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
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
