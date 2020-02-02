const IOType = require('./constants/io-type');

module.exports = {
  isEnable: {
    // 硬體輸入
    type: 'boolean'
  },
  ioType: {
    // 平常狀態
    optional: false,
    type: 'string',
    empty: false,
    enum: IOType.all()
  }
};
