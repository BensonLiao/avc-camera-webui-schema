module.exports = {
  // 辨識狀態

  fake: '0', // 假臉
  unknown: '1', // 未註冊
  registered: '2', // 已註冊
  all() {
    return [this.fake, this.unknown, this.registered];
  }
};
