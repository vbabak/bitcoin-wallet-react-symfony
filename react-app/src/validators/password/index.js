import ValidatorInterface from '../validatorInterface';
class PasswordValidator extends ValidatorInterface {

  constructor(strength) {
    super();
    this.strength = strength || 'low';
    this.error = '';
  }

  isValid(val) {
    this.error = '';
    switch (this.strength) {
      case 'low':
        break;
      default:
        throw new RangeError('Unsupported value fow password strength');
    }
    return !this.error;
  }

  isIdentical(val1, val2) {
    this.error = '';
    if (val1 !== val2) {
      this.error = 'Password and confirm password fields do not match';
    }
    return !this.error;
  }

  getErrorMessage() {
    return this.error;
  }

}

export default PasswordValidator;
