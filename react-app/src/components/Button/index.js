import React, {Component} from 'react';
import './style/index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.label = props.label || 'Continue';
    this.type = props.type || 'submit';
    this.disabled = props.disabled || false;
  }

  render() {
    return (
      <div className="form-row">
        <button type={this.type} disabled={this.disabled}>
          <span className="btn-label">{this.label}</span>
          <span className="btn-spinner"></span>
        </button>
      </div>
    );
  }
}
export default Button;
