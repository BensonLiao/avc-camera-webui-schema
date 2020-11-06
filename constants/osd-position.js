module.exports = {
  rightTop: '0', // 右上
  rightBottom: '1', // 右下
  leftTop: '2', // 左下
  leftBottom: '3', // 左下
  all() {
    return [this.rightTop, this.rightBottom, this.leftTop, this.leftBottom];
  }
};
