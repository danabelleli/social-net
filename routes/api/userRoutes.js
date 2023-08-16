const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/singleUser/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;