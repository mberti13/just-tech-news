// ! CONTAIN ALL USER FACING ROUTES
// ! (HOMEPAGE AND LOGIN PAGE)



const router = require('express').Router();



router.get('/', (req, res) =>{
    // res.render() works with template engine
    // renders homepage.handlebars
    res.render('homepage', {
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: "Handlebars Docs",
        created_at: new Date(),
        vote_count: 10,
        comment: [{}, {}],
        user:{
            username: 'test_user'
        }
    });
});

module.exports = router;