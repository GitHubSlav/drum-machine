import React from 'react';

class DrumPad extends React.Component {
    render() {
      return (
        <div id={this.props.id}>
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