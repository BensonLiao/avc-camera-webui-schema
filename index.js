const Validator = require('fastest-validator');

exports.validator = new Validator({
  messages: {
    stringContainsLowerCaseLatter: 'This field must contain the lower case letter.',
    stringContainsUpperCaseLatter: 'This field must contain the upper case letter.',
    stringContainsNumber: 'This field must contain the number.',
    birthday: 'This field must be a valid birthday.'
  }
});
