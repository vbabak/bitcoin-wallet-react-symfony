import React, {Component} from 'react';
import './style/index.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.title = props.title || '';
  }

  render() {
    return (
      <div className="header">
        <h1>{this.title}</h1>
      </div>
    );
  }
}

export default Header;
