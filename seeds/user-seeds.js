const { User } = require('../models')

const userData = [
    {
        username: "whatForDinDin",
        email: "hungry@mail.com",
        password: "password123"
    },
    {
        username: "bob",
        email: "hungry@mail.com",
        password: "password1238"
    },
    {
        username: "nicole",
        email: "hungry@mail.com",
        password: "password1237"
    },
    {
        username: "joe",
        email: "hungry@mail.com",
        password: "password1236"
    },
    {
        username: "bobby",
        email: "hungry@mail.com",
        password: "password1235"
    },
    {
        username: "GRANDMA",
        email: "hungry@mail.com",
        password: "password1234"
    },
    {
        username: "Water Boy",
        email: "hungry@mail.com",
        password: "password"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports= seedUsers;