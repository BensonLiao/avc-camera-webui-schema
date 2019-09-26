module.exports = {
  shutterSpeed: {
    optional: false,
    type: 'string',
    empty: false,
    enum: [
      'auto',
      '1/30',
      '1/50',
      '1/60',
      '1/100',
      '1/125',
      '1/500',
      '1/1000',
      '1/2000',
      '1/4000',
      '1/8000'
    ]
  }
};
