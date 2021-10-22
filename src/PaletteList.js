import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
import './PaletteList.css';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    // flexFlow: 'row wrap',
    width: '100vw',
  },
  container: {
    // width: '50%',
    display: 'flex',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  nav: {},
  palette: {},
};

const PaletteList = (props) => {
  const { palette, classes } = props;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Palette</h1>
          </nav>
          <div className={classes.palette}>
            {palette.map((p) => {
              return <MiniPalette {...p} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(PaletteList);
