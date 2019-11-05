module.exports = {
  auto: '0',
  outdoor: '1',
  fluorescent: '2',
  incandescent: '3',
  manual: '4',
  all() {
    return [this.auto, this.outdoor, this.fluorescent, this.incandescent, this.manual];
  }
};
