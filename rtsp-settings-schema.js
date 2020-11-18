module.exports = {
  isEnableAudioToStream: {
    // 將聲音記錄至串流除霧
    type: 'boolean'
  },
  isEnablePassword: {
    // 連線時需帳號密碼認證
    type: 'boolean'
  },
  tcpPort: {
    // RTSP/TCP 連接埠
    optional: false,
    type: 'number',
    convert: true,
    min: 1024,
    max: 65535
  },
  udpPort: {
    // RTSP/UDP 連接埠
    optional: false,
    type: 'number',
    convert: true,
    min: 1024,
    max: 65535
  },
  connectionLimit: {
    // 最大連接數
    optional: false,
    type: 'number',
    convert: true,
    min: 1,
    max: 8
  }
};
