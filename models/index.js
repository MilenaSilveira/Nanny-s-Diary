const Child = require('./child');
const AdminPost = require('./adminpost');
const Post = require('./post');
const User = require('./user');
const Admin = require('./admin');



User.hasMany(Child, {
  foreignKey: 'user_id',
});

Child.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsTo(Admin, {
  foreignKey: 'post_id',
})

Child.hasMany(AdminPost, {
  foreignKey: 'child_id',
});

Admin.hasMany(AdminPost, {
  foreignKey: 'admin_id'
})

AdminPost.belongsTo(Admin, {
  foreignKey: 'admin_id',
});

AdminPost.belongsTo(Child, {
  foreignKey: 'adminpost_id',
});







module.exports = { Child, AdminPost, Post, User, Admin };

