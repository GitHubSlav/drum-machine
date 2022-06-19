import React from 'react';
import DrumPad from './DrumPad';
import './styling/DrumBank.css'

class DrumBank extends React.Component {
    render() {
        let drumBank = null;
        drumBank = this.props.kit.map((el) => (
        <DrumPad
            keyTrigger={el.keyTrigger}
            source={el.url}
            keyCode={el.keyCode}
            key={el.id}
            id={el.id}
            volume={this.props.volume}
            setDisplayText={this.props.setDisplayText}
            isOn={this.props.isOn}
          />
        ));
      return (<div id="drum-bank">{drumBank}</div>);
    }
  }

export default DrumBank;