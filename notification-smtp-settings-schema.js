const SMTPEncryptionType = require('./constants/smtp-encryption-type');
const SMTPPort = require('./constants/smtp-port');

module.exports = {
  encryption: {
    // 加密
    optional: false,
    type: 'string',
    enum: SMTPEncryptionType.all()
  },
  host: {
    // IP 位址
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  port: {
    // 埠
    optional: false,
    type: 'string',
    empty: false,
    enum: SMTPPort.all()
  },
  account: {
    // 帳號
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  password: {
    // 密碼
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  senderName: {
    // 寄件人名稱
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  senderEmail: {
    // 寄件人電子郵件
    optional: true,
    type: 'email',
    mode: 'precise',
    empty: true,
    max: 1024
  },
  interval: {
    // 通知時間間隔 (秒)
    optional: true,
    type: 'number',
    convert: true,
    min: 5,
    max: 1800
  },
  isEnableLoginNotification: {
    // 登入通知信
    type: 'boolean'
  },
  isEnableAuth: {
    // 電子郵件登入認證
    type: 'boolean'
  }
};
