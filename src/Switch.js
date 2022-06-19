import React from 'react';
import './styling/Switch.css'

class Switch extends React.Component {
    render() {
      return (
        <div className="switch">
          {this.props.text}
          <div className="switch-rail" onClick={this.props.onClick}>
            <div className="switch-trigger" 
              style={this.props.toggleState ? {float: 'right'} : {float: 'left'}}>  
            </div>
          </div>
        </div>
      );
    }
}

export default Switch;