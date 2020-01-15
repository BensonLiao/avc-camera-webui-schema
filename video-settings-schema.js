const ShutterSpeed = require('./constants/shutter-speed');
const ApertureType = require('./constants/aperture-type');
const WhiteBalanceType = require('./constants/white-balance-type');
const DaynightType = require('./constants/daynight-type');
const OrientationType = require('./constants/orientation-type');
const RefreshRate = require('./constants/refresh-rate');

module.exports = {
  defoggingEnabled: {
    // 除霧
    type: 'boolean'
  },
  irEnabled: {
    // 紅外線燈
    type: 'boolean'
  },

  brightness: {
    // 亮度
    optional: false,
    type: 'number',
    min: -12,
    max: 12,
    integer: true
  },
  contrast: {
    // 對比
    optional: false,
    type: 'number',
    min: 1,
    max: 11,
    integer: true
  },
  hdrEnabled: {
    // HDR
    optional: false,
    type: 'string',
    empty: false,
    enum: ['false', 'true']
  },
  shutterSpeed: {
    // 快門速度
    optional: false,
    type: 'string',
    empty: false,
    enum: ShutterSpeed.all()
  },
  aperture: {
    // 自動光圈
    optional: false,
    type: 'string',
    empty: false,
    enum: ApertureType.all()
  },

  saturation: {
    // 飽和度
    optional: false,
    type: 'number',
    min: 0,
    max: 6,
    integer: true
  },
  whiteblanceMode: {
    // 白平衡
    optional: false,
    type: 'string',
    empty: false,
    enum: WhiteBalanceType.all()
  },
  whiteblanceManual: {
    // 白平衡-色溫
    optional: false,
    type: 'number',
    min: 3000,
    max: 8000,
    integer: true
  },
  daynightMode: {
    // 黑白模式
    optional: false,
    type: 'string',
    empty: false,
    enum: DaynightType.all()
  },
  sensitivity: {
    // 黑白模式-自動
    optional: false,
    type: 'number',
    min: 0,
    max: 5,
    integer: true
  },
  timePeriodStart: {
    // 黑白模式-指定時間
    optional: false,
    type: 'number',
    min: 0,
    max: 24
  },
  timePeriodEnd: {
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
    max: 10,
    integer: true
  },
  orientation: {
    // 影像方向
    optional: false,
    type: 'string',
    empty: false,
    enum: OrientationType.all()
  },
  refreshRate: {
    // 刷新頻率
    optional: false,
    type: 'string',
    empty: false,
    enum: RefreshRate.all()
  }
};
