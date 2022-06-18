import React from 'react';
import {heaterKit, pianoKit} from './audioTracks'
import DrumBank from './DrumBank';
import Switch from './Switch';
import VolumeSlider from './VolumeSlider';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kit : pianoKit,
      volume: 30
    }
  }

  render() { 
    return (
      <div id="drum-machine">
        <DrumBank kit={this.state.kit}/>
        <div id="control-panel">
          <Switch text={"Power"}/>
          <VolumeSlider value={this.state.volume}/>
          <Switch text={"Switch Kit"}/>
        </div>
      </div>
    );
  }
  
}

export default DrumMachine;