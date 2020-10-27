/* eslint-disable no-control-regex */

module.exports = {
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
};
