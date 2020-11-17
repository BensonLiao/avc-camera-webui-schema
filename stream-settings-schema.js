const StreamCodec = require('./constants/stream-codec');
const StreamResolution = require('./constants/stream-resolution');
const StreamGOV = require('./constants/stream-gov');
const StreamBandwidthManagement = require('./constants/stream-bandwidth-management');

const settingsSchema = {
  codec: {
    optional: false,
    type: 'string',
    enum: StreamCodec.all()
  },
  resolution: {
    optional: false,
    type: 'string',
    enum: StreamResolution.all()
  },
  frameRate: {
    optional: false,
    type: 'number',
    convert: true,
    min: 5,
    max: 30
  },
  bandwidthManagement: {
    optional: false,
    type: 'string',
    enum: StreamBandwidthManagement.all()
  },
  bitRate: {
    optional: false,
    type: 'number',
    convert: true,
    min: 1,
    max: 65536
  },
  gov: {
    optional: false,
    type: 'string',
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
