const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Thought = require('./Thoguht');

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
            ref: "Thought"
        }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }
        ],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// userSchema.virtual("friendCount").get(function () {
//     return this.friends.length;
//   });

const User = model('user', userSchema);

module.exports = User;
