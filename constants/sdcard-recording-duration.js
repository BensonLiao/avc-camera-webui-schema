const object = {};

for (let i = 1; i <= 60; i++) {
  object[i] = i.toString();
}

module.exports = {
  max: '0', // Until storage limitation
  ...object,
  all() {
    let arr = [this.max];
    for (let i = 1; i <= 60; i++) {
      arr.push(this[i]);
    }

    return arr;
  }
};
