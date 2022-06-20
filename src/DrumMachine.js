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
        let res = {};
        if (state.kit === heaterKit){
          res.kit = pianoKit;
          res.displayText = "Piano Kit";
        }
        else {
          res.kit = heaterKit;
          res.displayText = "Heater Kit";
        }
        if (!state.isPowerOn)
          res.displayText = "";
        return res;
      }
    );
  }

  togglePower() {
    this.setState((state) => 
      {
        return { 
          isPowerOn: !state.isPowerOn, 
          displayText: ""
        }
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
        <DrumBank 
          kit={this.state.kit} 
          volume={this.state.volume} 
          setDisplayText={this.setDisplayText}
          isOn={this.state.isPowerOn}
        />
        <div id="control-panel">
          <div id='switches'>
            <Switch
              text={"Power"}
              onClick={this.togglePower}
              toggleState={this.state.isPowerOn}
            />
            <Switch
              text={"Switch Kit"}
              onClick={this.toggleKit}
              toggleState={this.state.kit === heaterKit ? false : true }
            />
          </div>

          <Display text={this.state.displayText}/>
          <VolumeSlider value={this.state.volume} changeValue={this.setVolume}/>
        </div>
      </div>
    );
  }
  
}

export default DrumMachine;