module.exports = {
  connectionFail: 0,
  connectionSuccess: 1,
  loginFail: 2,
  all() {
    return [this.connectionFail, this.connectionSuccess, this.loginFail];
  }
};

