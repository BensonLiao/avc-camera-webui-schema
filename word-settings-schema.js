const WordColor = require('./constants/word-color');
const WordFontSize = require('./constants/word-font-size');
const WordPosition = require('./constants/word-position');
const WordType = require('./constants/word-type');

module.exports = {
  isEnable: {
    type: 'boolean'
  },
  fontSize: {
    optional: false,
    type: 'string',
    empty: false,
    enum: WordFontSize.all()
  },
  color: {
    optional: false,
    type: 'string',
    empty: false,
    enum: WordColor.all()
  },
  position: {
    optional: false,
    type: 'string',
    empty: false,
    enum: WordPosition.all()
  },
  type: {
    optional: false,
    type: 'string',
    empty: false,
    enum: WordType.all()
  },
  customText: {
    optional: false,
    type: 'string',
    empty: true
  }
};
