const { User } = require('../models')

const userData = [
    {
        username: "whatForDinDin",
        email: "mail@mail.com",
        password: "password123"
    },
    {
        username: "bob",
        email: "hungry@mail.com",
        password: "password1238"
    },
    {
        username: "nicole",
        email: "oakland@mail.com",
        password: "password1237"
    },
    {
        username: "joe",
        email: "joe@mail.com",
        password: "password1236"
    },
    {
        username: "bobby",
        email: "bobby@mail.com",
        password: "password1235"
    },
    {
        username: "GRANDMA",
        email: "grandma@mail.com",
        password: "password1234"
    },
    {
        username: "Water Boy",
        email: "water@mail.com",
        password: "password"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports= seedUsers;