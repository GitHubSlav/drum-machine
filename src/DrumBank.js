import React from 'react';
import DrumPad from './DrumPad';

class DrumBank extends React.Component {
    render() {
        let drumBank = null;
        drumBank = this.props.kit.map((el) => (
        <DrumPad
            keyTrigger={el.keyTrigger}
            source={el.url}
            keyCode={el.keyCode}
            id={el.id}
          />
        ));
      return (<div id="drum-bank">{drumBank}</div>);
    }
  }

export default DrumBank;