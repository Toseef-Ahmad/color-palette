import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './NavBar';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const { colors } = props.palette;
  const [formate, setFormate] = useState('rgb');
  const handleAfterChange = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormate = (formate) => {
    setFormate(formate);
  };
  return (
    <>
      <div className="Palette-container">
        <NavBar
          handleAfterChange={handleAfterChange}
          level={level}
          handleChange={changeFormate}
        />
        <div className="Palette-color">
          {colors[level].map((c) => (
            <ColorBox color={c} formate={formate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Palette;
