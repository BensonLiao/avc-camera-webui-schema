module.exports = {
  defog: {
    // 除霧
    type: 'boolean'
  },
  irLight: {
    // 紅外線燈
    type: 'boolean'
  },

  bright: {
    // 亮度
    optional: false,
    type: 'number',
    min: 0,
    max: 50,
    integer: true
  },
  contrast: {
    // 對比
    optional: false,
    type: 'number',
    min: 0,
    max: 50,
    integer: true
  },
  wdr: {
    // HDR
    optional: false,
    type: 'string',
    empty: false,
    enum: ['auto', 'off']
  },
  shutterSpeed: {
    // 快門速度
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'auto',
      '1/30',
      '1/50',
      '1/60',
      '1/100',
      '1/125',
      '1/500',
      '1/1000',
      '1/2000',
      '1/4000',
      '1/8000'
    ]
  },
  iris: {
    // 自動光圈
    optional: false,
    type: 'string',
    empty: false,
    enum: ['auto', 'max']
  },

  saturation: {
    // 飽和度
    optional: false,
    type: 'number',
    min: 0,
    max: 50,
    integer: true
  },
  whiteBalance: {
    // 白平衡
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'auto',
      'outdoor', // 戶外
      'fluorescent', // 日光燈
      'incandescent', // 白熱燈泡
      'manual' // 手動調整
    ]
  },
  whiteBalanceSensitivity: {
    // 白平衡-色溫
    optional: false,
    type: 'number',
    min: 0,
    max: 50,
    integer: true
  },
  dn: {
    // 日夜模式
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'auto',
      'day',
      'night',
      'manual' // 指定時間
    ]
  },
  dnSensitivity: {
    // 日夜模式-自動
    optional: false,
    type: 'number',
    min: 0,
    max: 5,
    integer: true
  },
  dnStartHour: {
    // 日夜模式-指定時間
    optional: false,
    type: 'number',
    min: 0,
    max: 24
  },
  dnEndHour: {
    // 日夜模式-指定時間
    optional: false,
    type: 'number',
    min: 0,
    max: 24
  }
};
