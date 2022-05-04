// ! CONTAIN ALL USER FACING ROUTES
// ! (HOMEPAGE AND LOGIN PAGE)



const router = require('express').Router();

const { append } = require('express/lib/response');
const sequelize = require('../config/connection');

const {Post, User, Comment } = require('../models');

router.get('/', (req, res) =>{
    // res.render() works with template engine
    // renders homepage.handlebars
Post.findAll({
    attributes:[
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT (*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include:[
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include:{
                model: User,
                attributes:['username']
            }
        },
        {
            model: User,
            attributes:['username']
        }
    ]
})
    .then(dbPostData => {
        // sequelizes each object/post to be visible on homepage
        const posts = dbPostData.map(post => post.get({ plain: true }));
        //pass a single post object into the homepage template
        res.render('homepage', {posts} );
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

// ! Route to link "/login" to 'login.handlebars'
router.get('/login', (req, res) =>{
    res.render('login');
});

module.exports = router;