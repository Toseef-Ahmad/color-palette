import React from 'react';
import './style.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewColorPalette from './NewColorPalette';

export default function App() {
  const [palettes, setPalettes] = React.useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const savePalette = (newPalette) => {
    setPalettes((oldPalettes) => [...oldPalettes, newPalette]);
  };
  
  return (
    <div>
      <Switch>
        <Route
          path="/palette/new"
          render={(routeParams) => (
            <NewColorPalette savePalette={savePalette} {...routeParams} />
          )}
        ></Route>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palette={palettes} {...routeProps} />
          )}
        ></Route>
        <Route
          exact
          path="/palette/:id"
          render={(routeParam) => (
            <Palette
              palette={generatePalette(findPalette(routeParam.match.params.id))}
            />
          )}
        ></Route>
        <Route
          path="/palette/:paletteId/:colorId"
          render={(routeParam) => (
            <SingleColorPalette
              colorId={routeParam.match.params.colorId}
              palette={generatePalette(
                findPalette(routeParam.match.params.paletteId)
              )}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}
