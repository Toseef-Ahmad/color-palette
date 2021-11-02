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
import styles from './styles/NavBarStyles';

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
              <MenuItem value="hex">HEX</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
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
