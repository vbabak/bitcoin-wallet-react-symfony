import React, {Component} from 'react';
import './style/index.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="container conteiner-signin">
        <Header title="Start using blockchain now"/>
        <div className="signin">
          <div className="headline">
            <div className="line1"><span>Continue Using Your Wallet</span></div>
            <div className="line2"><span>Sign in to your bitcoin wallet</span></div>
          </div>
          <form onSubmit={this.onSubmit}>
            <TextInput handleChange={this.handleChange} label="Email" type="email" name="email" value={this.state.email}/>
            <TextInput handleChange={this.handleChange} label="Password" type="password" name="password" value={this.state.password}/>
            <Button label="Log In" type="submit"/>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
