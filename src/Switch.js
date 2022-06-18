import React from 'react';
import './styling/Switch.css'

class Switch extends React.Component {
    render() {
      return (
        <div className="switch">
          {this.props.text}
          <div className="switch-rail">
            <div className="switch-trigger"></div>
          </div>
        </div>
      );
    }
}

export default Switch;