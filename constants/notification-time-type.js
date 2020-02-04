module.exports = {
  always: '0',
  custom: '1',
  all() {
    return [this.always, this.custom];
  }
};
