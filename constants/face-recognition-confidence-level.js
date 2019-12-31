module.exports = {
  low: '0',
  medium: '1',
  high: '2',
  all() {
    return [this.low, this.medium, this.high];
  }
};
