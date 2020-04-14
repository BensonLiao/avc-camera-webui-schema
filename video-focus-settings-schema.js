module.exports = {
  focalLength: {
    // 焦距
    optional: false,
    type: 'number',
    min: 0,
    max: 10,
    integer: true
  },
  zoom: {
    optional: false,
    type: 'number',
    min: 1,
    max: 2.3
  }
};
