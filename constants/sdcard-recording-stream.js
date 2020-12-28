module.exports = {
  1: '1', // Stream 1
  2: '2', // Stream 2
  all() {
    return [this[1], this[2]];
  }
};

