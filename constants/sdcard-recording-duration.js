const object = {};

for (let i = 1; i <= 5; i++) {
  object[i] = i.toString();
}

module.exports = {
  ...object,
  all() {
    return Object.values(object);
  }
};
