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

      if (schema.isAbortSpecialCharacters && /[#%&`"\\\u00b7\u300a\u300b<>\u201c\u201d\u3001\u0020\u3000]/.test(value)) {
        return this.makeError('stringAbortSpecialCharacters', null, value);
      }

      return true;
    }
  },
  birthday: {
    optional: false,
    type: 'custom',
    pattern: /^\d{4}[0-1]\d[0-3]\d$/,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('birthday', schema.pattern, value);
      }

      return true;
    }
  },
  password: {
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

      if (schema.isAbortSpecialCharacters && /[#%&`"\\\u00b7\u300a\u300b<>\u201c\u201d\u3001\u0020\u3000]/.test(value)) {
        return this.makeError('stringAbortSpecialCharacters', null, value);
      }

      if (schema.isAcceptSpecialCharacters && !/[!$'()*+,./:;=?@[\]^_{|}~-]+/.test(value)) {
        return this.makeError('stringAcceptSpecialCharacters', null, value);
      }

      return true;
    }
  }
};
