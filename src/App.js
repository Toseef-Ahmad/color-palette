import React from 'react';
import './style.css';
import seedColors from './seedColors';
import Palette from './Palette';

export default function App() {
  return <div>
    <Palette {...seedColors[4]} />
  </div>;
}
