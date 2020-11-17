const NotificationCardType = require('./constants/notification-card-type');
const NotificationEmailAttachmentType = require('./constants/notification-email-attachment-type');
const NotificationFaceRecognitionCondition = require('./constants/notification-face-recognition-condition');
const NotificationEmailContentPosition = require('./constants/notification-email-content-position');

module.exports = {
  type: {
    // 通知類型
    optional: false,
    type: 'string',
    empty: false,
    enum: NotificationCardType.all()
  },
  title: {
    // 通知名稱
    optional: false,
    type: 'string',
    empty: false,
    max: 32
  },
  isTop: {
    // 是否置頂
    type: 'boolean'
  },
  isEnableTime: {
    // 通知時間是否啟用（開啟：自訂，關閉：永遠通知）
    type: 'boolean'
  },
  timePeriods: {
    // 自訂通知時間
    optional: false,
    type: 'array',
    empty: true,
    min: 0,
    max: 5,
    items: {
      type: 'object',
      props: {
        start: {
          optional: false,
          type: 'date',
          convert: true
        },
        end: {
          optional: false,
          type: 'date',
          convert: true
        },
        isRepeat: {
          type: 'boolean'
        }
      }
    }
  },
  isEnableGPIO: {
    // 是否啟用 I/O
    type: 'boolean'
  },
  isEnableGPIO1: {
    // 是否啟用硬體輸出 1
    type: 'boolean'
  },
  isEnableGPIO2: {
    // 是否啟用硬體輸出 2
    type: 'boolean'
  },
  isEnableApp: {
    // 是否啟用 App
    type: 'boolean'
  },
  isEnableEmail: {
    // 是否啟用 Email
    type: 'boolean'
  },
  emails: {
    optional: false,
    type: 'array',
    empty: true,
    min: 0,
    max: 64,
    items: {
      optional: false,
      type: 'string',
      empty: false,
      max: 1024
    }
  },
  emailAttachmentType: {
    optional: false,
    type: 'string',
    empty: false,
    enum: NotificationEmailAttachmentType.all()
  },
  senderSubject: {
    optional: true,
    type: 'string',
    min: 0,
    max: 256
  },
  senderContent: {
    optional: true,
    type: 'string',
    min: 0,
    max: 512
  },
  emailContentPosition: {
    optional: false,
    type: 'string',
    empty: false,
    enum: NotificationEmailContentPosition.all()
  },
  groups: {
    optional: false,
    type: 'array',
    empty: true,
    items: {
      optional: false,
      type: 'string',
      empty: false,
      pattern: /^([a-f0-9-]{36})?$/
    }
  },

  // Face Recognition
  isEnableFaceRecognition: {
    type: 'boolean'
  },
  faceRecognitionCondition: {
    // 辨識通知條件
    optional: false,
    type: 'string',
    empty: false,
    enum: NotificationFaceRecognitionCondition.all()
  }
};
