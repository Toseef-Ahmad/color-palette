// i am using jss in this component
import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
  color: {},
  title: {},
};

const MiniPalette = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.color}></div>
        <div className={classes.title}></div>
      </div>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
