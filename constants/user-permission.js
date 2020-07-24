module.exports = {
  root: '0',
  guest: '1',
  superAdmin: '99',
  all() {
    return [this.root, this.guest, this.superAdmin];
  }
};
