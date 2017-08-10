import React, {Component} from 'react';
import './style/index.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.required = props.required || false;
    this.label = props.label || '';
    this.name = props.name || '';
    this.type = props.type || '';
    this.value = props.value || '';
    this.className = props.className || '';
    this.disabled = props.disabled || false;

    this.state = {
      [this.name]: this.value
    };

    this.handleChangeByParent = props.handleChange || null;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    if (this.handleChangeByParent) {
      this.handleChangeByParent(e);
    }
  }

  render() {
    return (
      <div className="form-row">
        <div className="label">{this.label}</div>
        <input value={this.state[this.name]} name={this.name} type={this.type} required={this.required} disabled={this.disabled} onChange={this.handleChange} className={this.className}/>
      </div>
    );
  }
}

/**
 * Define required props
 */
TextInput.propTypes = {
  handleChange: React.PropTypes.func.isRequired
};

export default TextInput;
