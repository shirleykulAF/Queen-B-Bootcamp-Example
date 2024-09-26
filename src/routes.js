const { Router } = require('express');
const controller = require('./controller')
const router = Router();

// router.get('/', (req, res) => {
//     res.send("using api routee");

// });


router.get("/",controller.getMentors);


module.exports = router;