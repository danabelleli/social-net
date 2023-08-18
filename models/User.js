const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Thought = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "thought"
        }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "user",
        }
        ],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// userSchema.virtual("friendCount").get(function () {
//     return this.friends.length;
//   });

const User = model('user', userSchema);

module.exports = User;
