const { Child } = require('../models');

const childData = [
  {
    comment_text: "Cool",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Good to know",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Awesome",
    user_id: 3,
    post_id: 3
  }
];

const seedChild = () => Child.bulkCreate(childData);

module.exports = seedChild;