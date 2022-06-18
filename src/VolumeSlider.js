import React from 'react';
import './styling/VolumeSlider.css'

class VolumeSlider extends React.Component {
    render() {
      return (
        <input
          type="range"
          id="volume"
          min="0"
          max="100"
          step="1"
          value={this.props.value}
        />
      );
    }
}

export default VolumeSlider;