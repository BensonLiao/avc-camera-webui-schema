const DDNSProvider = require('./constants/ddns-provider');

module.exports = {
  isEnableDDNS: {
    // 是否啟動DDNS服務
    type: 'boolean'
  },
  ddnsProvider: {
    // DDNS服務提供者
    optional: false,
    type: 'string',
    empty: false,
    enum: DDNSProvider.all()
  },
  ddnsHost: {
    // IP位址
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  ddnsAccount: {
    // 帳號
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  ddnsPassword: {
    // 密碼
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  }
};
