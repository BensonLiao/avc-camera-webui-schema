module.exports = {
  40: '40000', // 40M
  20: '20000', // 20M
  16: '16000', // 16M
  12: '12000', // 12M
  10: '10000', // 10M
  8: '8000', // 8M
  4: '4000', // 4M
  2: '2000', // 2M
  1: '1000', // 1M
  all() {
    return [this['40'], this['20'], this['16'], this['12'], this['10'], this['8'], this['4'], this['2'], this['1']];
  }
};
