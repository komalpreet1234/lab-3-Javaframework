const router = require('express').Router();

// routes
(require('./routes/pages'))(router);

module.exports = router;