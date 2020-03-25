module.exports = {
  motionDetect: '0', // 透過 Motion Detect Event 送出
  analytic: '1', // 透過 Analytic Event 送出
  all() {
    return [this.motionDetect, this.analytic];
  }
};
