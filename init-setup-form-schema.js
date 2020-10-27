/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-control-regex */
const account = require('./rules/account');
const password = require('./rules/password');
const language = require('./constants/i18n-supported-code');

module.exports = {
  account: {
    account: account,
    password: password
  },
  language: {
    optional: false,
    type: 'string',
    empty: false,
    enum: Object.keys(language)
  }
};
