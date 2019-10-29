module.exports = {
  selfSigned: '0',
  uploadCertificate: '1',
  generateCertificate: '2',
  all() {
    return [this.selfSigned, this.uploadCertificate, this.generateCertificate];
  }
};
