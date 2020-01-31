module.exports = {
  none: 'none',
  ssl: 'ssl',
  tls: 'tls',
  all() {
    return [this.none, this.ssl, this.tls];
  }
};
