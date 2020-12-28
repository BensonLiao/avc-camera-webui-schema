module.exports = {
  enabled: true, // Enabled sd card recording
  disabled: false, // Disabled sd card recording
  all() {
    return [this.enabled, this.disabled];
  }
};

