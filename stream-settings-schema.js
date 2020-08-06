const StreamCodec = require('./constants/stream-codec');
const StreamResolution = require('./constants/stream-resolution');
const StreamGOV = require('./constants/stream-gov');
const StreamBandwidthManagement = require('./constants/stream-bandwidth-management');

const settingsSchema = {
  codec: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamCodec.all()
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
  bandwidthManagement: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamBandwidthManagement.all()
  },
  bitRate: {
    optional: false,
    type: 'custom',
    pattern: /^[\d]{1,5}$/,
    min: 1,
    max: 65536,
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
  gov: {
    optional: false,
    type: 'string',
    empty: false,
    enum: StreamGOV.all()
  },
  quality: {
    optional: true,
    type: 'string'
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
