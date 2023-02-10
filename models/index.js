const Child = require('./child');
const AdminPost = require('./adminpost');
const Post = require('./post');
const User = require('./user')


Child.hasMany(AdminPost, {
  foreignKey: 'child_id',
});

AdminPost.belongsTo(Child, {
  foreignKey: 'child_id',
});

User.hasMany(AdminPost, {
  foreignKey: 'user_id',
});

AdminPost.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Child, AdminPost, User };