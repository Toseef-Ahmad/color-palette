import React from 'react';
import './style.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

export default function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palette={seedColors} {...routeProps} />
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
