import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@mui/styles';
import styles from './styles/ColorBoxStyles';

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
