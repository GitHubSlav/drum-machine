import React from 'react';
import './styling/DrumPad.css'

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.padRef = React.createRef();
    this.Play = this.Play.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.Play();
    }
  }

  Play() {
    if (this.props.isOn){
      this.props.setDisplayText(this.props.id);
      
      let pad = this.padRef.current;
      pad.classList.add('pushed');
      setTimeout(() => pad.classList.remove('pushed'), 100);

      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.volume = this.props.volume / 100;
      sound.play();
    }
  }

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onClick={this.Play} ref={this.padRef}>
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