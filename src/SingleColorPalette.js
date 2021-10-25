import React from 'react';
import chroma from 'chroma-js';
import ColorBox from './ColorBox';
import { withStyles } from '@mui/styles';
import './Palette.css';

const styles = {
  root: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
};

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
    return shades.slice(1);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="Palette-container">
          <div className="Palette-color">
            {this._shades.map((shade) => (
              <ColorBox color={shade} formate="rgba" showLinks={false} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
