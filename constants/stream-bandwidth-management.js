module.exports = {
  mbr: '0', // Maximun Bitrate, bitrate = range input
  vbr: '1', // Variable Bitrate, bitrate = auto
  cbr: '2', // Constant Bitrate, bitrate = range input
  all() {
    return [this.mbr, this.vbr, this.cbr];
  }
};
