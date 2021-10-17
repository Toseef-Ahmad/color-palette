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
        <p>{props.color.name}</p>
      </div>
    </>
  );
};

export default ColorBox;
