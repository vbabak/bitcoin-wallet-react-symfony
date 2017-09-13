class ValidatorInterface {
  isValid(val) {
    throw new ReferenceError('Method isValid() is not implemented');
  }

  getErrorMessage() {
    throw new ReferenceError('Method getErrorMessage() is not implemented');
  }
}
export default ValidatorInterface;
