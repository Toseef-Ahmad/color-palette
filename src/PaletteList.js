import React from 'react';
import { Link } from 'react-router-dom';
import './PaletteList.css';

const PaletteList = (props) => {
  const { palette } = props;
  return (
    <>
      <div className="PalatteList-container">
        <div className="paletteList">
          {palette.map((p) => {
            return <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>;
          })}
        </div>
      </div>
    </>
  );
};

export default PaletteList;
