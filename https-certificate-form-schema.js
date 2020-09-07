const {validator} = require('.');

const CertificateType = require('./constants/certificate-type');

const isEnable = {
  type: 'boolean'
};

const port = {
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
};

const certificateType = {
  optional: false,
  type: 'string',
  empty: false,
  enum: CertificateType.all()
};

module.exports.selfSigned = {
  isEnable: isEnable,
  port: port,
  certificateType: certificateType
};

module.exports.uploaded = {
  isEnable: isEnable,
  port: port,
  certificateType: certificateType,
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
    max: 20480
  }
};

module.exports.generated = {
  isEnable: isEnable,
  port: port,
  certificateType: certificateType,
  nation: {
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
  department: {
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
