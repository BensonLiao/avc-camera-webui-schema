const SyncTimeOption = require('./constants/system-sync-time');
const NTPCountry = require('./constants/system-sync-time-ntp-country');
const NTPTimeOption = require('./constants/system-sync-time-ntp-option');
const NTPTimeRateOption = require('./constants/system-sync-time-ntp-rate');

module.exports = {
  syncTimeOption: {
    // 日期時間選項
    optional: false,
    type: 'string',
    empty: false,
    enum: SyncTimeOption.all()
  },
  ntpCountry: {
    // 時區選項
    optional: false,
    type: 'string',
    empty: false,
    enum: NTPCountry.all()
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
  ntpTimeRateOption: {
    // NTP時間同步頻率選項
    optional: false,
    type: 'string',
    empty: false,
    enum: NTPTimeRateOption.all()
  }
};
