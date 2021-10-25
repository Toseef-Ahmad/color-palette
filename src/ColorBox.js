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
    '&:hover': {
      opacity: 1,
      transition: '200ms',
    },
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
    console.log(props);
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
            className={`ColorBox-overlay ${isCopyed && 'show'}`}
            style={styles.box}
          ></div>
          <div className={`ColoBox-copy-text ${isCopyed && 'show'}`}>
            <h1>COPYED!</h1>
            <p>{props.color[formate]}</p>
          </div>
          <div className="ColorBox-box-contant">
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
