import React from 'react';
import './styling/DrumPad.css'

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

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
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.volume = this.props.volume / 100;
      sound.play();
    }
  }

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onClick={this.Play}>
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