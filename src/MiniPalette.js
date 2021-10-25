// i am using jss in this component
import React from 'react';
import { withStyles } from '@mui/styles';
import {Link} from "react-router-dom";

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '0.5rem',
    position: 'relative',
    border: '1px solid black',
    cursor: 'pointer',
  },
  color: {
    height: '120px',
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    paddingTop: '0.5rem',
    position: 'relative',
  },
  emoji: {},
  miniColor: {
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    width: '20%',
    margin: '0 auto',
    marginBottom: '-3.5px',
  },
};
const MiniPalette = (props) => {
  const { classes, paletteName, colors, id, emoji } = props;
  return (
    <>
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.color}>
          {
            colors.map(c => <div className={classes.miniColor} style={{backgroundColor: c.color}} />)
          }
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
