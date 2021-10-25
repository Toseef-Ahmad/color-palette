import React from 'react';
import chroma from 'chroma-js';
import ColorBox from './ColorBox';

class SingleColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this._shades = this.colorShades(this.props.palette, this.props.colorId);
  }

  colorShades(palette, colorId) {
    let shades = [];
    const { colors } = palette;

    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades;
  }

  render() {
    return <>
      <ColorBox color={this._shades[0]}/>
    </>;
  }
}

export default SingleColorPalette;
