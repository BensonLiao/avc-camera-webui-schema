/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-control-regex */
const UserPermission = require('./constants/user-permission');

module.exports = {
  permission: {
    optional: false,
    type: 'string',
    empty: false,
    enum: UserPermission.all()
  },
  account: {
    optional: false,
    type: 'custom',
    empty: false,
    min: 1,
    max: 32,
    isNeedMinMax: true,
    isAbortSpecialCharacters: true,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (schema.empty === false && !value.length) {
        return this.makeError('stringEmpty', null, value);
      }

      if (schema.isNeedMinMax && (value.length < schema.min)) {
        return this.makeError('stringMin', schema.min, value);
      }

      if (schema.isNeedMinMax && (value.length > schema.max)) {
        return this.makeError('stringMax', schema.max, value);
      }

      if (schema.isAbortSpecialCharacters && (/[\u{B7}\u{300A}\u{300B}"\u{201D}#%&`\u{201C}/<>\u{3001}\\ \u{3000}]/u.test(value) || /[^\x00-\x7F]+/.test(value))) {
        return this.makeError('stringAbortSpecialCharacters', null, value);
      }

      return true;
    }
  },
  newPassword: {
    optional: false,
    type: 'custom',
    min: 8,
    max: 16,
    isNeedMinMax: true,
    isNeedLowerCase: true,
    isNeedUpperCase: true,
    isNeedNumber: true,
    isAbortSpecialCharacters: true,
    isAcceptSpecialCharacters: true,

    // eslint-disable-next-line complexity
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (value.length === 0) {
        return this.makeError('required', null, value);
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (schema.isNeedMinMax && (value.length < schema.min)) {
        return this.makeError('stringMin', schema.min, value);
      }

      if (schema.isNeedMinMax && (value.length > schema.max)) {
        return this.makeError('stringMax', schema.max, value);
      }

      if (schema.isNeedLowerCase && !/[a-z]+/.test(value)) {
        return this.makeError('stringContainsLowerCaseLatter', null, value);
      }

      if (schema.isNeedUpperCase && !/[A-Z]+/.test(value)) {
        return this.makeError('stringContainsUpperCaseLatter', null, value);
      }

      if (schema.isNeedNumber && !/\d+/.test(value)) {
        return this.makeError('stringContainsNumber', null, value);
      }

      if (schema.isAbortSpecialCharacters && (/[\u{B7}\u{300A}\u{300B}"\u{201D}#%&`\u{201C}/<>\u{3001}\\ \u{3000}]/u.test(value) || /[^\x00-\x7F]+/.test(value))) {
        return this.makeError('stringAbortSpecialCharacters', null, value);
      }

      if (schema.isAcceptSpecialCharacters && !/[!$'()*+,./:;=?@[\]^_{|}~-]+/.test(value)) {
        return this.makeError('stringAcceptSpecialCharacters', null, value);
      }

      return true;
    }
  }
};
