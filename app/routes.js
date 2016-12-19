module.exports = function (app, express) {

    // server routes ====================================================	======
    // handle things like ap	 calls
    // authentication 	outes

    // frontend routes ==================================================	======
    // route to handle all angular r	quests
    /*app.get('*', function(req,		es) {
     res.sendfile('./public/index.	tml');
     });
     */

    // ROUTES FOR OUR API
// =============================================================================
    var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function (req, res) {
        res.json({message: 'hooray! welcome to our api!'});
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
    app.use('/api', router);

    var Bear = require('./models/bear');
    var Comment = require('./models/comment');
    router.route('/bears')

        // create a bear (accessed at POST http://localhost:8080/api/bears)
        .post(function (req, res) {

            console.log(C)
            var bear = new Bear(req.body);      // create a new instance of the Bear model
            bear.name = req.body.name;  // set the bears name (comes from the request)
            console.log(req.body.name);

            // save the bear and check for errors
            bear.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'Bear created!'});
            });

        })

        // get all the bears (accessed at GET http://localhost:8080/api/bears)
        .get(function (req, res) {
            Bear.find(function (err, bears) {
                if (err)
                    res.send(err);

                res.json(bears);
            });
        });

    router.route('/bears/:bear_id')

        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function (req, res) {
            Bear.findById(req.params.bear_id, function (err, bear) {
                console.log(req.params);
                if (err)
                    res.send(err);
                res.json(bear);
            });
        });

    router.route('/comments/:bear_id/:comment')
        .post(function (req, res) {


            var comment = new Comment();      // create a new instance of the Bear model
            comment.comment = req.body.comment;  // set the bears name (comes from the request)
            comment.creator_id = req.body.creator_id;

            // save the comment and check for errors
            comment.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Comment added!'});
            });

        });

    router.route('/comments')
        .post(function (req, res) {


            var comment = new Comment();      // create a new instance of the Bear model
            comment.comment = req.body.comment;
            comment.creator_id = req.body.creator_id; // set the bears name (comes from the request)
            console.log(req.body.comment);
            // save the comment and check for errors
            comment.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Comment added!' + req.body.comment});
            });

        });



    router.route('/comments')
        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function (req, res) {

            Comment.find(function (err, comments) {
               // console.log(req.params);
                if (err)
                    res.send(err);
                res.json(comments);
            });
        });

    router.route('/lookupcomments/:bear_id')
        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function (req, res) {
            console.log(req.params.bear_id);
            Comment.find({'creator_id':req.params.bear_id},function (err, comments) {
                console.log(req.params);
                if (err)
                    res.send(err);
                res.json(comments);
            });
        });



};