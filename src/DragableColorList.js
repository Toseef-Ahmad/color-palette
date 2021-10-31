import React from 'react';
import DragableColorBox from './DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DragableColorList = SortableContainer(({ colors, handleClick }) => {
  return (
    <>
      <div style={{ height: '100%' }}>
        {colors.map(({ color, name, id }, index) => (
          <DragableColorBox
            index={index}
            key={id}
            color={color}
            colorName={name}
            id={id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
});

export default DragableColorList;
