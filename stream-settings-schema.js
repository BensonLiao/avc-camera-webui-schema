const StreamFormat = require('./constants/stream-format');
const StreamResolution = require('./constants/stream-resolution');
const StreamVBRBitRateLevel = require('./constants/stream-vbr-bit-rate-level');
const StreamVBRMaxBitRate = require('./constants/stream-vbr-max-bit-rate');
const StreamCBRBitRate = require('./constants/stream-cbr-bit-rate');
const StreamGOV = require('./constants/stream-gov');
const StreamBandwidthManagement = require('./constants/stream-bandwidth-management');

const settingsSchema = {
  format: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamFormat.all()
  },
  resolution: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamResolution.all()
  },
  frameRate: {
    optional: false,
    type: 'custom',
    pattern: /^[\d]{1,2}$/,
    min: 5,
    max: 30,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('stringPattern', schema.pattern, value);
      }

      const number = Number(value);
      if (number < schema.min) {
        return this.makeError('numberMin', schema.min, value);
      }

      if (number > schema.max) {
        return this.makeError('numberMax', schema.max, value);
      }

      return true;
    }
  },
  vbrBitRateLevel: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamVBRBitRateLevel.all()
  },
  vbrMaxBitRate: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamVBRMaxBitRate.all()
  },
  cbrBitRate: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamCBRBitRate.all()
  },
  gov: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamGOV.all()
  },
  bandwidthManagement: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamBandwidthManagement.all()
  }
};

module.exports = {
  channelA: {
    type: 'object',
    props: settingsSchema
  },
  channelB: {
    type: 'object',
    props: settingsSchema
  }
};
