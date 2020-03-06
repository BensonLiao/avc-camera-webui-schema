module.exports = {
  auto: '0',
  on: '1',
  off: '2',
  all() {
    return [this.auto, this.on, this.off];
  }
};
