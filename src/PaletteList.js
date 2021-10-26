import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteListStyles';
// import './PaletteList.css';

const PaletteList = (props) => {
  const { palette, classes } = props;
  const goToPalette = (id) => {
    console.log(props.history);
    props.history.push(`/palette/${id}`);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Palette</h1>
            <Link to="/palette/new">create new Palette</Link>
          </nav>
          <div className={classes.palette}>
            {palette.map((p) => {
              return (
                <MiniPalette {...p} handleClick={() => goToPalette(p.id)} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(PaletteList);
