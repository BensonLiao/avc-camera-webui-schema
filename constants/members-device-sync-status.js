module.exports = {
  syncNotStarted: 0,
  syncOngoing: 1,
  syncFinished: 2,
  syncAbnormal: 3,
  exportFail: 4,
  unzipFail: 5,
  wrongPassword: 6,
  syncCancel: 7,
  overLimit: 8,
  all() {
    return [
      this.syncNotStarted,
      this.syncOngoing,
      this.syncFinished,
      this.syncAbnormal,
      this.exportFail,
      this.unzipFail,
      this.wrongPassword,
      this.syncCancel,
      this.overLimit
    ];
  }
};

