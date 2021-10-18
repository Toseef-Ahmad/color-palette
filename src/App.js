import React from 'react';
import './style.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';

export default function App() {
  return <div>
    <Palette palette={generatePalette(seedColors[4])} />
  </div>;
}
