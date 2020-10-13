module.exports = {
  '2K': '0', // 2K, 2560*1440
  '4K': '1', // 4k, 3840*2160
  all() {
    return [this['2k'], this['4k']];
  }
};
