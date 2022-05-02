// ! CONTAIN ALL USER FACING ROUTES
// ! (HOMEPAGE AND LOGIN PAGE)



const router = require('express').Router();



router.get('/', (req, res) =>{
    // res.render() works with template engine
    // renders homepage.handlebars
    res.render('homepage');
});

module.exports = router;