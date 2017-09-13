import ValidatorInterface from '../validatorInterface';
class StringValidator extends ValidatorInterface {

  constructor(min, max) {
    super();
    this.min = parseInt(min, 10) || null;
    this.max = parseInt(max, 10) || null;
    this.error = '';
  }

  isValid(val) {
    val += ""; // to string
    this.error = '';
    if (this.min && val.length < this.min) {
      this.error = 'Field should not be less ' + this.min + 'characters length';
    }
    if (this.max && val.length > this.max) {
      this.error = 'Field should be not be more ' + this.max + ' characters length';
    }
    return !this.error;
  }

  getErrorMessage() {
    return this.error;
  }
}

export default StringValidator;
