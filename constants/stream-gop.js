module.exports = {
  10: '0', // 10
  5: '1', // 5
  2: '2', // 2
  1: '3', // 1
  0.5: '4', // 0.5
  0.25: '5', // 0.25
  all() {
    return [this['10'], this['5'], this['2'], this['1'], this['0.5'], this['0.25']];
  }
};
