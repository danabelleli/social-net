const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
    .route('/SingleThought/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .post(createReaction)
    .delete(deleteThought);



module.exports = router;