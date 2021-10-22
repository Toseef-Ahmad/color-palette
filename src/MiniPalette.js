// i am using jss in this component
import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '0.5rem',
    position: 'relative',
    border: '1px solid black',
  },
  color: {},
  colorBox: {},
  title: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // magin: 0,
    // color: 'black',
    // paddingTop: '0.5rem',
    // position: 'relative',
  },
  emoji: {},
};
const MiniPalette = (props) => {
  const { classes, paletteName, colors, id, emoji } = props;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.color}>
          {colors.map((c) => {
            return (
              <div
                className={classes.colorBox}
                style={{ backgroundColor: c.color }}
              ></div>
            );
          })}
        </div>
        <div className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
