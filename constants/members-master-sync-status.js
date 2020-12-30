module.exports = {
  syncNotStarted: 0,
  syncing: 1,
  all() {
    return [this.syncNotStarted, this.syncing];
  }
};

