import React from 'react';
import './styling/VolumeSlider.css'

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeValue(e.target.value);
  }

  render() {
    return (
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        step="1"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default VolumeSlider;