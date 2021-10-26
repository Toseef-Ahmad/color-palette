import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/FooterStyles';

const Footer = (props) => {
  const { paletteName, emoji, classes } = props;

  return (
    <>
      <footer className={classes.root}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </>
  );
};

export default withStyles(styles)(Footer);
