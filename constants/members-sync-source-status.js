module.exports = {
  connectionCheckStart: 0,
  connectionChecking: 1,
  connectionCheckFinish: 2,
  exportStart: 3,
  exporting: 4,
  exportFinish: 5,
  importStart: 6,
  importing: 7,
  importFinish: 8,
  all() {
    return [
      this.connectionCheckStart,
      this.connectionChecking,
      this.connectionCheckFinish,
      this.exportStart,
      this.exporting,
      this.exportFinish,
      this.importStart,
      this.importing,
      this.importFinish
    ];
  }
};

