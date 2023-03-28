// require express router
const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require ('../../controllers/user-controller');

//this will direct our route to get and post requests
router.route ('/').get(getAllUsers).post (createUsers);

// this directs to get, put, delete
router.route ('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

//this will direct to post and delete for friends/friendId
router.route ('/:id/friend/:friendId').post (addFriend).delete (deleteFriend)

module.exports = router;