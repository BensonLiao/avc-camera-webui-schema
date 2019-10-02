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
    // 黑白模式
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
    // 黑白模式-自動
    optional: false,
    type: 'number',
    min: 0,
    max: 5,
    integer: true
  },
  dnStartHour: {
    // 黑白模式-指定時間
    optional: false,
    type: 'number',
    min: 0,
    max: 24
  },
  dnEndHour: {
    // 黑白模式-指定時間
    optional: false,
    type: 'number',
    min: 0,
    max: 24
  },

  sharpness: {
    // 銳利度
    optional: false,
    type: 'number',
    min: 0,
    max: 50,
    integer: true
  },
  orientation: {
    // 影像方向
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'off', // 正常
      'flip-v', // 垂直翻轉
      'flip-h', // 水平翻轉
      'flip-vh' // 180 度翻轉
    ]
  },
  flickerLess: {
    // 刷新頻率
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'auto',
      '50Hz',
      '60Hz'
    ]
  }
};
