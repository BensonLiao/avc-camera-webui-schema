const SyncTimeOption = require('./constants/system-sync-time');
const NTPTimeZone = require('./constants/system-sync-time-ntp-timezone');
const NTPTimeOption = require('./constants/system-sync-time-ntp-option');
const NTPUpdateTimeRateOption = require('./constants/system-sync-time-ntp-rate');

module.exports = {
  syncTimeOption: {
    // 時間同步選項
    optional: false,
    type: 'string',
    empty: false,
    enum: SyncTimeOption.all()
  },
  ntpTimeZone: {
    // 時區選項
    optional: false,
    type: 'string',
    empty: false,
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
    empty: false,
    enum: NTPTimeOption.all()
  },
  ntpUpdateTime: {
    optional: false,
    type: 'custom',
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return this.makeError('date', null, value);
      }

      return true;
    }
  },
  ntpUpdateTimeRate: {
    // NTP時間同步頻率選項
    optional: false,
    type: 'string',
    empty: false,
    enum: NTPUpdateTimeRateOption.all()
  },
  manualTime: {
    optional: true,
    type: 'custom',
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return this.makeError('date', null, value);
      }

      return true;
    }
  }
};
