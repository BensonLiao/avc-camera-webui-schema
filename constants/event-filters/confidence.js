module.exports = {
  // 相似度

  low: '1', // 低
  medium: '2', // 中
  high: '3', // 高
  all() {
    return [this.low, this.medium, this.high];
  }
};
