import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = (props) => {
  return (
    <>
      <div className="Palette-container">
        <div className="Palette-color">
          {props.colors.map((c) => (
            <ColorBox color={c} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Palette;
