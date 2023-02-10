const { AdminPost } = require('../models');

const adminPostData = [
  {
    child_Name: 'Timmy',
    meals: 'Chicken nuggets and apple sauce for lunch. Goldfish for afternoon snack',
    activities: 'arts and crafts: drew a polar bear',
    nap_schedule:'took nap for 2 hrs',
    child_mood: 'Happy: Overall good day',
    other: 'n/a',
    date_created: asdfasdf
  },

];

const seedAdminPosts = () => AdminPost.bulkCreate(adminPostData);

module.exports = seedAdminPosts;