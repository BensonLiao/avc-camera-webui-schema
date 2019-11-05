module.exports = {
  auto: '0',
  color: '1',
  blackAndWhite: '2',
  manual: '3',
  all() {
    return [this.auto, this.color, this.blackAndWhite, this.manual];
  }
};
