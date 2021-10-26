import React, { useState } from 'react';
import ColorBox from './ColorBox';
// import './Palette.css';
import NavBar from './NavBar';
import { withStyles } from '@mui/styles';
import Footer from './Footer';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  color: {
    height: '90%',
  },
};

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const { classes } = props;
  const { colors, paletteName, emoji } = props.palette;
  const [formate, setFormate] = useState('rgb');
  const handleAfterChange = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormate = (formate) => {
    setFormate(formate);
  };

  return (
    <>
      <div className={classes.container}>
        <NavBar
          handleAfterChange={handleAfterChange}
          level={level}
          handleChange={changeFormate}
          showSlider={true}
        />
        <div className={classes.color}>
          {colors[level].map((c) => (
            <ColorBox
              color={c}
              formate={formate}
              paletteId={props.palette.id}
            />
          ))}
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    </>
  );
};

export default withStyles(styles)(Palette);
