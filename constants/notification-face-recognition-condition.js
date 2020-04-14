module.exports = {
  always: '0', // 不限
  success: '1', // 成功
  unknown: '2', // 失敗、未知
  all() {
    return [this.always, this.unknown, this.success];
  }
};
