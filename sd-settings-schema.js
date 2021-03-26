module.exports = {
  snapshotMaxNumber: {
    // Number of snapshots to save to SD card
    optional: false,
    type: 'number',
    convert: true,
    min: 1000,
    max: 131071
  }
};

