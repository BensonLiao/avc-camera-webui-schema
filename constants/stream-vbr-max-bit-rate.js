module.exports = {
  40: '40', // 40M
  20: '20', // 20M
  16: '16', // 16M
  12: '12', // 12M
  10: '10', // 10M
  8: '8', // 8M
  4: '4', // 4M
  2: '2', // 2M
  1: '1', // 1M
  all() {
    return [this['40'], this['20'], this['16'], this['12'], this['10'], this['8'], this['4'], this['2'], this['1']];
  }
};
