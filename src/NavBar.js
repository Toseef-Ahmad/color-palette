import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import './NavBar.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const styles = {
  container: {
    display: 'flex',
    height: '40px',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: '150px',
    backgroundColor: '#eceff1',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    '& a': {
      display: 'block',
      marginTop: '5px',
      textDecoration: 'none',
      color: 'black',
      textAlign: 'center',
      position: 'absolute',
      left: '15%',
      top: '10%',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  level: {
    position: 'absolute',
    left: '170px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '14px',
  },
  slider: {
    width: '30%',
    padding: '10px 10px',
    position: 'absolute',
    left: '230px',
    '& .rc-slider-rail': {
      height: 7,
    },
    '& .rc-slider-track': {
      background: 'transparent',
    },
    '& .rc-slider-handle': {
      background: 'green',
      border: 'none',
      outline: 'none',
    },
  },

  selectContainer: {
    width: '30%',
    padding: '10px 10px',
    position: 'absolute',
    left: '1100px',
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formate: 'rgb',
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      formate: target.value,
      open: true,
    });
    this.props.handleChange(target.value);
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  action = (
    <IconButton onClick={this.handleClose}>
      <CloseIcon style={{ color: 'white' }} />
    </IconButton>
  );

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.container}>
          {console.log(this.props.level)}
          <div className={classes.logo}>
            <Link to="/">reactcolorpicker</Link>
          </div>
          {this.props.showSlider && (
            <div className={classes.level}>
              <p>Level {this.props.level}</p>
            </div>
          )}

          {this.props.showSlider && (
            <div className={classes.slider}>
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onAfterChange={this.props.handleAfterChange}
              />
            </div>
          )}

          <div className={classes.selectContainer}>
            <Select value={this.state.formate} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.1)</MenuItem>
            </Select>
          </div>
          <div className="snackbar-container">
            <Snackbar
              open={this.state.open}
              message="Formate Changed: "
              onClose={this.handleClose}
              autoHideDuration={4000}
              action={this.action}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(NavBar);
