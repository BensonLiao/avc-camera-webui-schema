module.exports = {
  isAutoFocus: {
    // 自動對焦
    type: 'boolean'
  },
  focalLength: {
    // 焦距
    optional: false,
    type: 'number',
    min: 0,
    max: 1008,
    integer: true
  },
  zoom: {
    optional: false,
    type: 'number',
    min: 1,
    max: 2.3
  }
};
