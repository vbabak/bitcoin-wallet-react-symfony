import React, {Component} from 'react';
import './style/index.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <p className="copy">&copy; blockchain</p>
      </div>
    );
  }
}

export default Footer;
