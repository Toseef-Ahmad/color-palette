import React from 'react';
import chroma from 'chroma-js';
import ColorBox from './ColorBox';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
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
    this.state = {
      formate: 'rgb',
    };
    this._shades = this.colorShades(this.props.palette, this.props.colorId);
    this.changeFormate = this.changeFormate.bind(this);
  }

  changeFormate(formate) {
    this.setState({
      formate: formate,
    });
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
    const { classes, palette } = this.props;
    return (
      <>
        <div className="Palette-container">
          <NavBar showSlider={false} handleChange={this.changeFormate} />
          <div className="SingleColorPalette Palette-color">
            {this._shades.map((shade) => (
              <ColorBox
                key={shade.name}
                color={shade}
                formate={this.state.formate}
                showLinks={false}
                height={'50%'}
              />
            ))}
            <div className="go-back ColorBox">
              <Link to={`/palette/${palette.id}`} className="back-button">
                GO BACK
              </Link>
            </div>
          </div>
          <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
