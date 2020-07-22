module.exports = {
  root: '0',
  guest: '1',
  viewer: '2',
  superAdmin: '99',
  all() {
    return [this.root, this.guest, this.viewer, this.superAdmin];
  }
};
