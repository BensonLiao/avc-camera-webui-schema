module.exports = {
  disconnection: '0', // Disconnection recording
  event: '1', // Event recording
  continuous: '2', // Continuous recording
  all() {
    return [this.disconnection, this.event, this.continuous];
  }
};

