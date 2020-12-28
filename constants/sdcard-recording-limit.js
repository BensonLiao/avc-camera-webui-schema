module.exports = {
  override: true, // Disconnection recording
  stop: false, // Event recording
  all() {
    return [this.override, this.stop];
  }
};

