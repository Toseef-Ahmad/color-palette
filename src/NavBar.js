import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formate: 'rgb',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      formate: target.value,
    });
    this.props.handleChange(target.value);
  }

  render() {
    return (
      <>
        <div className="NavBar-container">
          {console.log(this.props.level)}
          <div className="logo">
            <a href="#">reactcolorpicker</a>
          </div>
          <div className="level">
            <p>Level {this.props.level}</p>
          </div>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.handleAfterChange}
            />
          </div>
          <div className="select-container">
            <Select value={this.state.formate} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.1)</MenuItem>
            </Select>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
