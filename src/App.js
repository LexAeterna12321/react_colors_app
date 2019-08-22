import React from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./components/PaletteList";
function App() {
  const findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={routeProps => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route
        path="/palette/:id"
        exact
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        path="/palette/:paletteId/:colorId"
        exact
        render={() => <h1>single color page</h1>}
      />
    </Switch>
  );
}

export default App;
