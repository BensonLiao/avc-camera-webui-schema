module.exports = {
  // 相似度

  low: '0', // 低
  medium: '1', // 中
  high: '2', // 高
  all() {
    return [this.low, this.medium, this.high];
  }
};
