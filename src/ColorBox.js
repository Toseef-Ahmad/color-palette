import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@mui/styles';

const styles = {
  colorBox: {
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: (props) => props.height,
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
      transition: '200ms',
    },
  },
  boxContent: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  colorName: {
    color: (props) =>
      chroma(props.color.hex).luminance() > 0.5 ? 'black' : 'white',
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    color: (props) =>
      chroma(props.color.hex).luminance() > 0.5 ? 'black' : 'white',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    position: 'absolute',
    marginLeft: '80%',
    top: '117px',
    textTransform: 'uppercase',
    lineHeight: '30px',
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: (props) =>
      chroma(props.color.hex).luminance() > 0.5 ? 'black' : 'white',
    opacity: 0,
    transition: '100ms',
    textDecoration: 'none',
  },
  copyOverly: {
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.9s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverly: {
    opacity: 1,
    transform: 'scale(10)',
    zIndex: 10,
    position: 'absolute',
    overflow: 'hidden',
  },
  copyMessage: {
    width: '100%',
    height: '100%',
    opacity: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyItems: 'center',
    '& h1': {
      fontWeight: 400,
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.3)',
      marginTop: 300,
      width: '100%',
      padding: 30,
      fontSize: 50,
      textTransform: 'uppercase',
    },
    '& p': {
      fontWeight: 100,
      fontSize: '2rem',
    },
  },
  showMessage: {
    opacity: 1,
    color: 'white',
    position: 'fixed',
    zIndex: 20,
    transition: 'all',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in-out',
    transitionDelay: '0.3s',
  },
};

const ColorBox = (props) => {
  const [isCopyed, setIsCopyed] = useState(false);
  const isDark = chroma(props.color.hex).luminance() > 0.5;
  console.log(isDark);
  const styles = {
    box: {
      backgroundColor: props.color.hex,
    },
  };
  const { formate, classes } = props;
  const copyOverlay = () => {
    setIsCopyed(true);
    setTimeout(() => {
      setIsCopyed(false);
    }, 1500);
  };

  return (
    <>
      <CopyToClipboard text={props.color[formate]} onCopy={() => copyOverlay()}>
        <div className={classes.colorBox} style={styles.box}>
          <div
            className={`${classes.copyOverly} ${
              isCopyed && classes.showOverly
            }`}
            style={styles.box}
          ></div>
          <div
            className={`${classes.copyMessage} ${
              isCopyed && classes.showMessage
            }`}
          >
            <h1>COPYED!</h1>
            <p>{props.color[formate]}</p>
          </div>
          <div className={classes.boxContent}>
            <p className={classes.colorName}>{props.color.name}</p>
          </div>
          <button className={classes.copyButton}>COPY</button>
          {props.showLinks && (
            <Link
              to={`/palette/${props.paletteId}/${props.color.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    </>
  );
};

ColorBox.defaultProps = {
  showLinks: true,
  height: '25%',
};

export default withStyles(styles)(ColorBox);
