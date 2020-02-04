module.exports = {
  faceRecognition: '0',
  ageGender: '1',
  humanoidDetection: '2',
  all() {
    return [this.faceRecognition, this.ageGender, this.humanoidDetection];
  }
};
