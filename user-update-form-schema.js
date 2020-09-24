const UserSchema = require('./user-schema');

module.exports = {
  permission: UserSchema.permission,
  account: UserSchema.account,
  newPassword: UserSchema.password
};
