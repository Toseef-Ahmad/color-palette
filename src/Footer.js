import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '5vh',
    fontWeight: 400,
    fonFamily: 'roboto, sans-serif',
  },
};

const Footer = (props) => {
  const { paletteName, emoji, classes } = props;

  return (
    <>
      <footer className={classes.root}>
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </>
  );
};

export default withStyles(styles)(Footer);
