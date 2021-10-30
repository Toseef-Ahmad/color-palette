import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: '25%',
    height: '25%',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
  },
};

const DragableColorBox = (props) => {
  return (
    <>
      <div className={props.classes.root}>{props.colorName}</div>
    </>
  );
};

export default withStyles(styles)(DragableColorBox);
