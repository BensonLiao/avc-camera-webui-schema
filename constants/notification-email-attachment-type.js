module.exports = {
  faceThumbnail: '0', // 臉部快照
  screenshot: '1', // 完整快照
  none: '2', // 不傳附件
  all() {
    return [this.faceThumbnail, this.screenshot, this.none];
  }
};
