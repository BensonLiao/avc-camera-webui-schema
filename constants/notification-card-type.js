module.exports = {
  faceRecognition: '0',
  ageGender: '1',
  humanoidDetection: '2',
  motionDetection: '3', // PD or MD
  tamperAlarm: '4',
  digitalInput: '5',
  all() {
    return [this.faceRecognition, this.ageGender, this.humanoidDetection, this.motionDetection, this.tamperAlarm, this.digitalInput];
  }
};
