import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './NavBar';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const { colors } = props.palette;
  const handleAfterChange = (newLevel) => {
    setLevel(newLevel);
  };
  return (
    <>
      <div className="Palette-container">
        <NavBar handleAfterChange={handleAfterChange} level={level} />
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
