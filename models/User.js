const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // Unique
            // Trimmed
        },
        email: {
            type: String,
            required: true,
            // Unique
            // Must match a valid email address (look into Mongoose's matching validation)
        },
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            // Array of _id values referencing the User model (self-reference)
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;
