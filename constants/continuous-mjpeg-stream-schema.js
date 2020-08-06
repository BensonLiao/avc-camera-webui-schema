module.exports = {
  res: {type: 'string', optional: true, enum: ['full', 'half']},
  quality: {type: 'number', optional: true, convert: true, integer: true, min: 0, max: 100},
  $$strict: 'remove'
};
