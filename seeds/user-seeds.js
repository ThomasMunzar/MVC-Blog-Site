const { User } = require('../models')

const userData = [
    {
        username: "whatForDinDin",
        email: "hungry@mail.com",
        password: "password123"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports= seedUsers;