module.exports = {
  normal: '0',
  verticalFlip: '1',
  horizontalFlip: '2',
  '180DegreeFlip': '3',
  all() {
    return [this.normal, this.verticalFlip, this.horizontalFlip, this['180DegreeFlip']];
  }
};
