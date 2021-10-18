import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = (props) => {
  const [isCopyed, setIsCopyed] = useState(false);
  const styles = {
    box: {
      backgroundColor: props.color.hex,
    },
  };

  const copyOverlay = () => {
    setIsCopyed(true);
    setTimeout(() => {
      setIsCopyed(false);
    }, 1500);
  };

  return (
    <>
      <CopyToClipboard text={props.color.color} onCopy={() => copyOverlay()}>
        <div className="ColorBox" style={styles.box}>
          <div
            className={`ColorBox-overlay ${isCopyed && 'show'}`}
            style={styles.box}
          ></div>
          <div className={`ColoBox-copy-text ${isCopyed && "show"}`}>
            <h1>COPYED!</h1>
            <p>{props.color.hex}</p>
          </div>
          <div className="ColorBox-box-contant">
            <p>{props.color.name}</p>
          </div>
          <button className="ColorBox-copy-button">COPY</button>
          <button className="ColorBox-more-button">More</button>
        </div>
      </CopyToClipboard>
    </>
  );
};

export default ColorBox;
