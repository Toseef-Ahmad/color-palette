import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const { colors } = props.palette;
  return (
    <>
      <div className="Palette-container">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={(newValue) => setLevel(newValue)}
          />
        </div>
        <div className="Palette-color">
          {colors[level].map((c) => (
            <ColorBox color={c} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Palette;
