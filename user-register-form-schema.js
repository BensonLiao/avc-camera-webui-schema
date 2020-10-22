const UserSchema = require('./user-schema');

module.exports = {
  permission: UserSchema.permission,
  account: UserSchema.account,
  password: UserSchema.password
};
