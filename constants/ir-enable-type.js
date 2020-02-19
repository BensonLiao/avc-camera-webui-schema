module.exports = {
  auto: 'Auto',
  on: 'On',
  off: 'Off',
  all() {
    return [this.auto, this.on, this.off];
  }
};
