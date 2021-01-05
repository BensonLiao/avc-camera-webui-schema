module.exports = {
  override: '0', // Disconnection recording
  stop: '1', // Event recording
  all() {
    return [this.override, this.stop];
  }
};

