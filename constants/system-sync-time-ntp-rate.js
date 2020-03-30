module.exports = {
  10: '10',
  30: '30',
  60: '60',
  120: '120',
  240: '240',
  all() {
    return [this['10'], this['30'], this['60'], this['120'], this['240']];
  }
};
