const FaceRecognitionConfidenceLevel = require('./constants/face-recognition-confidence-level');

module.exports = {
  isEnable: {
    // 辨識功能
    type: 'boolean'
  },
  confidenceLevel: {
    // 相似度層級
    optional: false,
    type: 'string',
    empty: false,
    enum: FaceRecognitionConfidenceLevel.all()
  },
  isShowMember: {
    // 顯示人名
    type: 'boolean'
  },
  isShowGroup: {
    // 顯示已註冊群組
    type: 'boolean'
  },
  isShowUnknown: {
    // 顯示 "Unknown"
    type: 'boolean'
  },
  triggerArea: {
    // 觸發區域
    type: 'object',
    props: {
      x: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      y: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      width: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      height: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      }
    }
  },
  isEnableFaceFrame: {
    // 人臉大小
    type: 'boolean'
  },
  faceFrame: {
    // 人臉大小
    type: 'object',
    props: {
      x: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      y: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      width: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      },
      height: {
        optional: false,
        type: 'number',
        min: 0,
        max: 100,
        integer: true
      }
    }
  }
};
