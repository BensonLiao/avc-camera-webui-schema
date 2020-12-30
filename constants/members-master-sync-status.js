module.exports = {
  syncNotStarted: 0,
  syncOngoing: 1,
  all() {
    return [this.syncNotStarted, this.syncing];
  }
};

