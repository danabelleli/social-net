const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {

    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update user by id
    async updateUser(req, res) {
        await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.json(err));
    },

    // delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that id' });
            }
            res.json({ message: 'User deleted.' });

        } catch (err) {
            res.status(500).json(err);
        }
    },

};