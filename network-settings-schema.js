const NetworkIPType = require('./constants/system-network-ip-type');

module.exports = {
  ipType: {
    // IP類型
    optional: false,
    type: 'string',
    empty: false,
    enum: NetworkIPType.all()
  },
  ipAddress: {
    // IP位址
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  subnetMask: {
    // 子網路遮罩
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  gateway: {
    // 路由器/閘道
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  primaryDNS: {
    // 慣用DNS
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  secondaryDNS: {
    // 其他DNS
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  }
};
