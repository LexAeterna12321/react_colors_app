import React from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";

function App() {
  const findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  return (
    <Switch>
      <Route path="/" exact render={() => <h1>paal</h1>} />
      <Route
        path="/palette/:id"
        exact
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}
{
  /* <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div> */
}
export default App;
