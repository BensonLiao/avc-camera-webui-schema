const object = {};

for (let i = 0; i <= 10; i++) {
  object[i] = i.toString();
}

module.exports = {
  ...object,
  all() {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
      arr.push(this[i]);
    }

    return arr;
  }
};
