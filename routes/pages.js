const {index ,contact} = require('../controllers/PagesController');

// route to pages
module.exports = router => {

    router.get('/', index);
    router.get('/contact', contact);
};