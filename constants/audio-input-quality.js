module.exports = {
  low: '0', // 低 (G.711, 8kHz, 64kbps, Mono)
  normal: '1', // 一般 (AAC, 16kHz, 96kbps, Mono)
  all() {
    return [this.low, this.normal];
  }
};

