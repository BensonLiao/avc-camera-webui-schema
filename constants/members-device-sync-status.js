module.exports = {
  syncNotStarted: 0,
  syncOngoing: 1,
  syncFinished: 2,
  syncAbnormal: 3,
  all() {
    return [this.syncNotStarted, this.syncOngoing, this.syncFinished, this.syncAbnormal];
  }
};

