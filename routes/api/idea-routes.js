//here we require express
const router = require ('express').Router();

//here we set our requirements
const {
    getAllIdeas,
    getIdeasById,
    createIdeas,
    updateIdeas,
    deleteIdeas,
    addReaction,
    deleteReaction
} = require ('../../controllers/idea-controller');

// This will be our get route
router.route ('/').get(getAllIdeas);

//this will be our get, put, deletes
router.route ('/:id').get(getIdeasById).put(updateIdeas).delete(deleteIdeas);

//this will be the post route
router.route ('/:userId').post(createIdeas);

//post route for reactions
router.route ('/:ideasId/reactions').post(addReaction);

// delete route
router.route ('/:ideasId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;