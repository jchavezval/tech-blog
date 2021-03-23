//Dependencies
const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//User model
class User extends Model {

}

//User table columns and configuration
User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            
        }
    }
)