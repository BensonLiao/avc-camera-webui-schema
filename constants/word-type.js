module.exports = {
  time: '0', // 時間
  cameraName: '1', // 相機名稱
  cameraNameAndTime: '2', // 相機名稱+時間
  custom: '3', // 自訂文字
  all() {
    return [this.time, this.cameraName, this.cameraNameAndTime, this.custom];
  }
};
