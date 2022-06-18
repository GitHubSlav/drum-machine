import React from 'react';
import {heaterKit, pianoKit} from './audioTracks'
import DrumBank from './DrumBank';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kit : pianoKit
    }
  }

  render() {
    
    return (
      <div id="drum-machine">
        <DrumBank kit={this.state.kit}/>
      </div>
    );
  }
  
}

export default DrumMachine;