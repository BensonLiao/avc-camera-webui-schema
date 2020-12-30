module.exports = {
  id: {
    optional: false,
    type: 'string',
    pattern: /^[a-f0-9-]{36}$/
  },
  time: {
    optional: false,
    type: 'date',
    convert: true
  },
  keyword: {
    optional: true,
    type: 'custom',
    check: function (value) {
      const comma = /,/g;
      const space = /\s/g;

      if ((((value.match(comma) || []).length > 3) || ((value.match(space) || []).length > 3)) ||
      ((value.match(comma) || []).length + (value.match(space) || []).length) > 3) {
        return this.makeError('maxOperators', null, value);
      }

      return true;
    }
  }
};
