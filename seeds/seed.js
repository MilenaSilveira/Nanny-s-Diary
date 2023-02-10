const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedChild = require('./childData');
const seedAdminPosts = require('./adminPost');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
    await seedAdminPosts();
    console.log('\n----- ADMIN POSTS SEEDED -----\n');
    await seedChild();
    console.log('\n----- CHILDREN SEEDED -----\n');
  
  
    process.exit(0);
  };
  
  seedAll();
