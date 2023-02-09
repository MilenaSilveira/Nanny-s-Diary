const Child = require('./child');
const AdminPost = require('./adminpost');
const Post = require('./post');
const User = require('./user')


Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { Child, AdminPost, Post, User };