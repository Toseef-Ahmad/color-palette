import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="NavBar-container">
          {console.log(this.props.level)}
          <div className="logo">
            <a href="#">reactcolorpicker</a>
          </div>
          <div className="level"><p>Level {this.props.level}</p></div>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.handleAfterChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
