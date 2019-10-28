module.exports = {
  error: 0,
  operational: 1,
  all() {
    return [this.error, this.operational];
  }
};
