import React from 'react';
import './style.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewColorPalette from './NewColorPalette';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const deletePalette = (id) => {
    setPalettes(() => palettes.filter((palette) => palette.id !== id));
  };

  const savePalette = (newPalette) => {
    setPalettes((oldPalettes) => [...oldPalettes, newPalette]);
  };

  React.useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

  const syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500} key={location.key}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeParams) => (
                  <div className="page">
                    <NewColorPalette
                      savePalette={savePalette}
                      {...routeParams}
                      palettes={palettes}
                    />
                  </div>
                )}
              ></Route>
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <div className="page">
                    <PaletteList
                      palette={palettes}
                      {...routeProps}
                      deletePalette={deletePalette}
                    />
                  </div>
                )}
              ></Route>
              <Route
                exact
                path="/palette/:id"
                render={(routeParam) => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        findPalette(routeParam.match.params.id)
                      )}
                    />
                  </div>
                )}
              ></Route>
              <Route
                path="/palette/:paletteId/:colorId"
                render={(routeParam) => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routeParam.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeParam.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              ></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
