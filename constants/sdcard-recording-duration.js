module.exports = {
  max: '0', // Until storage limitation
  ...object,
  all() {
    for (let i = 1; i <= 60; i++) {
      return [this.max].push(this[i]);
    }
  }
};
let object = {};
for (let i = 1; i <= 60; i++) {
  object[i] = i.toString();
}
