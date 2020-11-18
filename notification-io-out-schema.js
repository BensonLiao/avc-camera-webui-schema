const IOType = require('./constants/io-type');
const GateType = require('./constants/gate-type');

module.exports = {
  isEnable: {
    // 硬體輸入
    type: 'boolean'
  },
  ioType: {
    // 平常狀態
    optional: false,
    type: 'string',
    enum: IOType.all()
  },
  gateType: {
    // 輸出類型
    optional: false,
    type: 'string',
    enum: GateType.all()
  },
  pulse: {
    // 訊號緩衝時間 (秒)
    optional: true,
    type: 'number',
    convert: true,
    min: 1,
    max: 80
  },
  delay: {
    // 延後間格時間 (秒)
    optional: true,
    type: 'number',
    convert: true,
    min: 1,
    max: 1800
  }
};
