module.exports = {
  0: '80', // High
  1: '50', // Medium
  2: '30', // Low
  all() {
    return [this[0], this[1], this[2]];
  }
};
