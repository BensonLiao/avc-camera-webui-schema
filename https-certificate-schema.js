const CertificateType = require('./constants/certificate-type');
const {validator} = require('.');

module.exports = {
  isEnable: {
    type: 'boolean'
  },
  port: {
    optional: false,
    type: 'custom',
    pattern: /^[\d]{1,5}$/,
    min: 1,
    max: 65535,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('stringPattern', schema.pattern, value);
      }

      const number = Number(value);
      if (number < schema.min) {
        return this.makeError('numberMin', schema.min, value);
      }

      if (number > schema.max) {
        return this.makeError('numberMax', schema.max, value);
      }

      return true;
    }
  },
  certificateType: {
    optional: false,
    type: 'string',
    empty: false,
    enum: CertificateType.all()
  },

  certificate: {
    optional: false,
    type: 'string',
    empty: false,
    max: 20480
  },
  privateKey: {
    optional: false,
    type: 'string',
    empty: false,
    max: 10240
  },

  country: {
    optional: false,
    type: 'custom',
    pattern: /^[a-zA-Z]{2}$/,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('countryCode', schema.pattern, value);
      }

      return true;
    }
  },
  state: {
    optional: false,
    type: 'string',
    empty: false,
    max: 64
  },
  city: {
    optional: false,
    type: 'string',
    empty: false,
    max: 64
  },
  organization: {
    optional: false,
    type: 'string',
    empty: false,
    max: 64
  },
  organizationUnit: {
    optional: false,
    type: 'string',
    empty: false,
    max: 64
  },
  email: {
    optional: false,
    type: 'custom',
    max: 64,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (value.length > schema.max) {
        return this.makeError('stringMax', schema.max, value);
      }

      return validator.rules.email.apply(this, [value, schema]);
    }
  },
  domain: {
    optional: false,
    type: 'string',
    empty: false,
    max: 64
  }
};
