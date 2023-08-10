// This will have a foreign key that references blog
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Class Comment extends Model