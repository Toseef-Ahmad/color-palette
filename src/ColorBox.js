import React from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = (props) => {
  const styles = {
    box: {
      backgroundColor: props.color.color,
    },
  };
  return (
    <>
      <CopyToClipboard text={props.color.color}>
        <div className="ColorBox" style={styles.box}>
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
