module.exports = {
  ntp: '0',
  manual: '1',
  local: '2',
  all() {
    return [this.ntp, this.manual, this.local];
  }
};
