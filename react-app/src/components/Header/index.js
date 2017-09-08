import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomePage from '../../containers/App';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';
import './style/index.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.title = props.title || '';
  }

  render() {
    const isLoggedIn = false;
    return (
      <div className="header">
        <h1>{this.title}</h1>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li><Link to={HomePage.component_url}>Home</Link></li>
            {!isLoggedIn &&
            <li>< Link to={SignUp.component_url}>Sign Up</Link></li>
            }
            {!isLoggedIn &&
            <li>< Link to={SignIn.component_url}>Sign In</Link></li>
            }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
