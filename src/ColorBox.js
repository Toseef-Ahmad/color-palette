import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

const ColorBox = (props) => {
  const [isCopyed, setIsCopyed] = useState(false);
  const isDark = chroma(props.color.hex).luminance() > 0.5;
  console.log(isDark);
  const styles = {
    box: {
      backgroundColor: props.color.hex,
    },
  };
  const { formate } = props;
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
        <div className="ColorBox" style={styles.box}>
          <div
            className={`ColorBox-overlay ${isCopyed && 'show'}`}
            style={styles.box}
          ></div>
          <div className={`ColoBox-copy-text ${isCopyed && 'show'}`}>
            <h1>COPYED!</h1>
            <p>{props.color[formate]}</p>
          </div>
          <div className="ColorBox-box-contant">
            <p style={{ color: isDark ? 'black' : 'white' }}>
              {props.color.name}
            </p>
          </div>
          <button className="ColorBox-copy-button">COPY</button>
          {props.showLinks && (
            <Link
              to={`/palette/${props.paletteId}/${props.color.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="ColorBox-more-button"
                style={{ color: isDark ? 'black' : 'white' }}
              >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    </>
  );
};

ColorBox.defaultProps = {
  showLinks: true,
};

export default ColorBox;
