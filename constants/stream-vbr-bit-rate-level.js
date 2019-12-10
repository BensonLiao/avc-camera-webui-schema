module.exports = {
  best: '0', // 最好
  complete: '1', // 完整
  good: '2', // 較佳
  normal: '3', // 一般
  bad: '4', // 不足
  all() {
    return [this.best, this.complete, this.good, this.normal, this.bad];
  }
};
