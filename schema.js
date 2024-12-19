const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
    },
    profile: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        age: {
            type: Number
        }
    },
    lastLogin: {
        type: Date
    }
});

module.exports = mongoose.model('User', schema);
