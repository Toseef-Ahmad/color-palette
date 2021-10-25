import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";

const ColorBox = (props) => {
  const [isCopyed, setIsCopyed] = useState(false);
  const styles = {
    box: {
      backgroundColor: props.color.hex,
    },
  };
  const { formate } = props;
  const copyOverlay = () => {
    setIsCopyed(true);
    setTimeout(() => {
      setIsCopyed(false);
    }, 1500);
  };

  return (
    <>
      <CopyToClipboard text={props.color.hex} onCopy={() => copyOverlay()}>
        <div className="ColorBox" style={styles.box}>
          <div
            className={`ColorBox-overlay ${isCopyed && 'show'}`}
            style={styles.box}
          >

          </div>
          <div className={`ColoBox-copy-text ${isCopyed && 'show'}`}>
            <h1>COPYED!</h1>
            <p>{props.color[formate]}</p>
          </div>
          <div className="ColorBox-box-contant">
            <p>{props.color.name}</p>
          </div>
          <button className="ColorBox-copy-button">COPY</button>
          <Link to='/' onClick={e => e.stopPropagation()}>
            <span className="ColorBox-more-button">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    </>
  );
};

export default ColorBox;
