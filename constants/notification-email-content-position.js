module.exports = {
  emailHead: '0', // 附加在信件開頭
  emailTail: '1', // 附加在信件尾端
  all() {
    return [this.emailHead, this.emailTail];
  }
};
