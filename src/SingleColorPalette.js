import React from 'react';
import chroma from 'chroma-js';
import ColorBox from './ColorBox';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './Palette.css';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  color: {
    height: '90%',
  },
  colorBox: {
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: '50%',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: 1,
    backgroundColor: 'black',
  },
  goBack: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    opacity: 1,
    textDecoration: 'none',
    color: 'white',
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
        <div className={classes.container}>
          <NavBar showSlider={false} handleChange={this.changeFormate} />
          <div className={classes.color}>
            {this._shades.map((shade) => (
              <ColorBox
                key={shade.name}
                color={shade}
                formate={this.state.formate}
                showLinks={false}
                height={'50%'}
              />
            ))}
            <div className={classes.goBack && classes.colorBox}>
              <Link to={`/palette/${palette.id}`} className={classes.goBack}>
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
