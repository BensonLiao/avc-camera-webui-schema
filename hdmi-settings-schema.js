const StreamResolution = require('./constants/stream-resolution');
const StreamSettingsSchema = require('./stream-settings-schema');

module.exports = {
  resolution: StreamSettingsSchema.channelA.props.resolution,
  frameRate: StreamSettingsSchema.channelA.props.frameRate
};
