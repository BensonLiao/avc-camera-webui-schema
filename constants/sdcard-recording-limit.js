module.exports = {
  override: '0', // Override oldest recording
  stop: '1', // Stop recording
  all() {
    return [this.override, this.stop];
  }
};

