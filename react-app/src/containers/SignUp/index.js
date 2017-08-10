import React, {Component} from 'react';
import './style/index.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password2: '',
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
      <div className="container conteiner-signup">
        <Header title="Start using blockchain now"/>
        <div className="signup">
          <div className="headline">
            <div className="line1"><span>Create Your Wallet</span></div>
            <div className="line2"><span>Sign up a bitcoin wallet</span></div>
          </div>
          <form onSubmit={this.onSubmit}>
            <TextInput handleChange={this.handleChange} label="Email" type="email" name="email" value={this.state.email}/>
            <TextInput handleChange={this.handleChange} label="New Password" type="password" name="password" value={this.state.password}/>
            <TextInput handleChange={this.handleChange} label="Confirm Password" type="password" name="password2" value={this.state.password2}/>
            <Button label="Continue" type="submit"/>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
