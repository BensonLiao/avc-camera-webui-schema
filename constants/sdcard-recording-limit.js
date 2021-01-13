module.exports = {
  stop: '0', // Stop recording
  override: '1', // Override oldest recording
  all() {
    return [this.stop, this.override];
  }
};

