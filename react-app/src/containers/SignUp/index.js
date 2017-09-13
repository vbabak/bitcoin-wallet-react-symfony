import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userSignUpRequest} from '../../actions/signUpActions';
import './style/index.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignIn from '../../containers/SignIn';
import StringValidator from '../../validators/sting';
import PasswordValidator from '../../validators/password';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: '',
        password: '2',
        password2: '3',
      },
      errors: {
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  resetFormErrors() {
    var errors = {};
    for (var f in this.state.fields) {
      errors[f] = '';
    }
    this.setState({errors: errors});
  }

  validateForm() {
    this.resetFormErrors();
    var errors = {};
    const emailValidator = new StringValidator(3, 16);
    if (!emailValidator.isValid(this.state.fields.email)) {
      errors.email = emailValidator.getErrorMessage();
      return false;
    }
    const passwordStrValidator = new StringValidator(3, 16);
    if (!passwordStrValidator.isValid(this.state.fields.password)) {
      errors.password = passwordStrValidator.getErrorMessage();
    }
    if (!passwordStrValidator.isValid(this.state.fields.password2)) {
      errors.password2 = passwordStrValidator.getErrorMessage();
    }
    const passwordValidator = new PasswordValidator();
    if (!passwordValidator.isIdentical(this.state.fields.password, this.state.fields.password2)) {
      errors.password2 = passwordValidator.getErrorMessage();
    }
    if (!passwordValidator.isValid(this.state.fields.password)) {
      errors.password = passwordValidator.getErrorMessage();
    }

    if (Object.keys(errors).length) {
      var newState = Object.assign({}, this.state);
      newState.errors = errors;
      this.setState({errors: errors});
      return false;
    }
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    const {userSignUpRequest} = this.props; // from react-redux
    if (!this.validateForm()) {
      return false;
    }
    userSignUpRequest(this.state.fields)
      .then(
        (responseObj) => {
          console.log(responseObj);
        },
        ({data}) => this.setState({errors: data.errors})
      )
      .catch((e) => {
        console.log(e);
      });
  }

  handleChange(e) {
    var newState = Object.assign({}, this.state);
    newState.fields[[e.target.name]] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="container conteiner-signup">
        <Header title="Start using blockchain now"/>
        <div className="signup">
          <div className="headline">
            <div className="floatleft">
              <div className="line1"><span>Create Your Wallet</span></div>
              <div className="line2"><span>Sign up a bitcoin wallet</span></div>
            </div>
            <div className="floatright">
              <Link to={SignIn.component_url}>Sign In</Link>
            </div>
            <div className="clear"></div>
          </div>
          <form onSubmit={this.onSubmit}>
            <TextInput handleChange={this.handleChange} label="Email" type="email" name="email"
                       value={this.state.fields.email} error={this.state.errors.email}/>
            <TextInput handleChange={this.handleChange} label="New Password" type="password" name="password"
                       value={this.state.fields.password} error={this.state.errors.password}/>
            <TextInput handleChange={this.handleChange} label="Confirm Password" type="password" name="password2"
                       value={this.state.fields.password2} error={this.state.errors.password2}/>
            <Button label="Continue" type="submit"/>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

SignUp.component_url = '/sign-up';

// SignUp.PropTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// };

export default connect(null, {userSignUpRequest})(SignUp);
