const express = require('express');
const router = express.Router();

/**
 * @router   Get api/posts
 * 
 * @desc     This is just a Test route
 * 
 * @access   Public
 */

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;