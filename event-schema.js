module.exports = {
  id: {
    optional: false,
    type: 'string',
    empty: false,
    pattern: /^[a-f0-9-]{36}$/
  },
  time: {
    optional: false,
    type: 'custom',
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return this.makeError('date', null, value);
      }

      return true;
    }
  }
};
