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
    this.error = props.error || '';

    this.state = {
      [this.name]: this.value,
      disabled: this.disabled,
      error: this.error
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

  componentWillReceiveProps(nextProps) {
    var newState = Object.assign({}, this.state);
    newState.error = nextProps.error;
    newState.disabled = nextProps.disabled;
    newState[this.name] = nextProps.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className={"form-row" + (this.state.error ? " error" : "")}>
        <div className="label">{this.label} {this.error}</div>
        <input value={this.state[this.name]} name={this.name} type={this.type} required={this.required} disabled={this.state.disabled} onChange={this.handleChange} className={this.className}/>
        {this.state.error &&
        <p className="error">{this.state.error}</p>
        }
      </div>
    );
  }
}

/**
 * Define required props
 */
// TextInput.propTypes = {
//   handleChange: React.PropTypes.func.isRequired
// };

export default TextInput;
