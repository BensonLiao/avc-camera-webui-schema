module.exports = {
  0: 'inactive', // 未啟用
  1: 'thirtyThousand', // 30k
  2: 'threeThousand', // 3k
  all() {
    return [this[0], this[1], this[2]];
  }
};
