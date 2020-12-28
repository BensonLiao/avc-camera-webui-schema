module.exports = {
  off: '0', // Not recording
  on: '1', // Recording
  all() {
    return [this.off, this.on];
  }
};

