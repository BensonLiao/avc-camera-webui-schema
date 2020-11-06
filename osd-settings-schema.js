const OsdColor = require('./constants/osd-color');
const OsdFontSize = require('./constants/osd-font-size');
const OsdPosition = require('./constants/osd-position');
const OsdType = require('./constants/osd-type');

module.exports = {
  isEnable: {
    type: 'boolean'
  },
  fontSize: {
    optional: false,
    type: 'string',
    empty: false,
    enum: OsdFontSize.all()
  },
  color: {
    optional: false,
    type: 'string',
    empty: false,
    enum: OsdColor.all()
  },
  position: {
    optional: false,
    type: 'string',
    empty: false,
    enum: OsdPosition.all()
  },
  type: {
    optional: false,
    type: 'string',
    empty: false,
    enum: OsdType.all()
  },
  customText: {
    optional: false,
    type: 'string',
    empty: true,
    max: 32
  }
};
