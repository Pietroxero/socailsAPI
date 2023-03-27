//Here we require the express router
const router = require ('express').Router();

//This will import our API routes
const apiRoutes = require ('./api');

router.use ('/api', apiRoutes);

//This will show a 404 error
router.use ((req, res) => {
    res.status (404).send ('<h1>WOMP WOMP 404</h1>');
});

//Module exports router
module.exports = router;