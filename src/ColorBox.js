import React from 'react';
import './ColorBox.css';

const ColorBox = (props) => {
  const styles = {
    box: {
      backgroundColor: props.color.color,
    },
  };
  return (
    <>
      <div className="ColorBox" style={styles.box}>
        <div className="ColorBox-box-contant">
          <p>{props.color.name}</p>
        </div>
        <button className="ColorBox-copy-button">COPY</button>
        <button className="ColorBox-more-button">More</button>
      </div>
    </>
  );
};

export default ColorBox;
