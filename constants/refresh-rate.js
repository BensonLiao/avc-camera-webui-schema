module.exports = {
  auto: '0',
  '50Hz': '1',
  '60Hz': '2',
  all() {
    return [this.auto, this['50Hz'], this['60Hz']];
  }
};
