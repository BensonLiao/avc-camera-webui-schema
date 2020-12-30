module.exports = {
  connectionFail: 0,
  connectionSuccess: 1,
  all() {
    return [this.connectionFail, this.connectionSuccess];
  }
};

