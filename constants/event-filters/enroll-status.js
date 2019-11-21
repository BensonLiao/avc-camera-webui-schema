module.exports = {
  // 辨識狀態

  registered: '1', // 已註冊
  unknown: '2', // 未註冊
  all() {
    return [this.registered, this.unknown];
  }
};
