module.exports = {
  0: '0', // 3840*2160(16:9)
  1: '1', // 2560*1440(16:9)
  2: '2', // 1920*1080(16:9)
  3: '3', // 1280*720(16:9)
  4: '4', // 640*360(16:9)
  5: '5', // 2048*1536(4:3)
  6: '6', // 1600*1200(4:3)
  7: '7', // 1280*960(4:3)
  8: '8', // 640*480(4:3)
  all() {
    return [
      this['0'],
      this['1'],
      this['2'],
      this['3'],
      this['4'],
      this['5'],
      this['6'],
      this['7'],
      this['8']
    ];
  }
};
