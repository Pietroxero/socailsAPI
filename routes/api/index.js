// here is were we set requirements (express router)
const router = require ('express').Router();

// here we set routes
const userRoutes = require ('./user-routes');
const ideasRoutes = require ('./idea-routes');

router.use ('/users', userRoutes);
router.use ('/ideas', ideasRoutes);

module.exports = router;