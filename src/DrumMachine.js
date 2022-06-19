import React from 'react';
import {heaterKit, pianoKit} from './audioTracks'
import DrumBank from './DrumBank';
import Switch from './Switch';
import VolumeSlider from './VolumeSlider';
import Display from './Display';
import './styling/DrumMachine.css'

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      kit : heaterKit,
      volume: 10,
      displayText: "",
      isPowerOn: true
    }

    this.setDisplayText = this.setDisplayText.bind(this);
    this.toggleKit = this.toggleKit.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  setDisplayText(text) {
    if (this.state.isPowerOn){
      this.setState({ displayText: text });
    }
    else this.setState({ displayText: "" });
  }

  toggleKit() {
    this.setState((state) => 
      {
        if (state.kit === heaterKit){
          this.setDisplayText("Piano Kit");
          return { kit: pianoKit };
        } 
        else {
          this.setDisplayText("Heater Kit");
          return { kit: heaterKit };
        }
      }
    );
  }

  togglePower() {
    this.setState((state) => 
      {
        this.setDisplayText("");
        return { isPowerOn: !state.isPowerOn,}
      }   
    );
  }

  setVolume(val){
    this.setDisplayText(`Volume ${val}`);
    this.setState({volume: val});
  }

  render() { 
    return (
      <div id="drum-machine">
        <DrumBank kit={this.state.kit}/>
        <div id="control-panel">
          <Switch
            text={"Power"}
            onClick={this.togglePower}
            toggleState={this.state.isPowerOn}
          />
          <Display text={this.state.displayText}/>
          <VolumeSlider value={this.state.volume} changeValue={this.setVolume}/>
          <Switch
            text={"Switch Kit"}
            onClick={this.toggleKit}
            toggleState={this.state.kit === heaterKit ? false : true }
          />
        </div>
      </div>
    );
  }
  
}

export default DrumMachine;