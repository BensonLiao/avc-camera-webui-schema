const AudioInputQuality = require('./constants/audio-input-quality');
const AudioInputSource = require('./constants/audio-input-source');

module.exports = {
  isEnableInput: {
    // 聲音
    type: 'boolean'
  },
  isEnableOutput: {
    // 聲音輸出
    type: 'boolean'
  },
  inputQuality: {
    // 聲音品質
    optional: false,
    type: 'string',
    empty: false,
    enum: AudioInputQuality.all()
  },
  inputSource: {
    // 聲音輸入來源
    optional: false,
    type: 'string',
    empty: false,
    enum: AudioInputSource.all()
  }
};
