module.exports = {
  normal: '0', // 一般
  buffer: '1', // 緩衝
  all() {
    return [this.normal, this.buffer];
  }
};
