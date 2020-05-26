module.exports = {
  h265: 'H265',
  h264: 'H264',
  mjpeg: 'MJPEG',
  off: 'OFF',
  all() {
    return [this.h265, this.h264, this.mjpeg, this.off];
  }
};
