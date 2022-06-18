import React from 'react';
import './styling/DrumPad.css'

class DrumPad extends React.Component {
    render() {
      return (
        <div id={this.props.id} className="drum-pad">
          <audio
            src={this.props.source}
            id={this.props.keyTrigger}
          ></audio>
          {this.props.keyTrigger}
        </div>
      );
    }
}

export default DrumPad;