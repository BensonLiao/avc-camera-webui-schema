const SyncTimeOption = require('./constants/system-sync-time');
const NTPTimeZone = require('./constants/system-sync-time-ntp-timezone');
const NTPTimeOption = require('./constants/system-sync-time-ntp-option');
const NTPUpdateTimeRateOption = require('./constants/system-sync-time-ntp-rate');

module.exports = {
  syncTimeOption: {
    // 時間同步選項
    optional: false,
    type: 'string',
    enum: SyncTimeOption.all()
  },
  ntpTimeZone: {
    // 時區選項
    optional: false,
    type: 'string',
    enum: NTPTimeZone.all()
  },
  ntpIP: {
    // NTP伺服器主機IP位址
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  ntpTimeOption: {
    // NTP時間同步選項
    optional: false,
    type: 'string',
    enum: NTPTimeOption.all()
  },
  ntpUpdateTime: {
    optional: false,
    type: 'date',
    convert: true
  },
  ntpUpdateTimeRate: {
    // NTP時間同步頻率選項
    optional: false,
    type: 'string',
    enum: NTPUpdateTimeRateOption.all()
  },
  manualTime: {
    optional: true,
    type: 'date',
    convert: true
  }
};
