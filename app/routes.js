module.exports = function(app,express) {

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
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
    app.use('/api', router);

    var Bear     = require('./models/bear');
    router.route('/bears')

        // create a bear (accessed at POST http://localhost:8080/api/bears)
        .post(function(req, res) {


            var bear = new Bear();      // create a new instance of the Bear model
            bear.name = req.body.name;  // set the bears name (comes from the request)
            console.log(req.body.name);

            // save the bear and check for errors
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear created!' });
            });

        })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

    router.route('/bears/:name')

        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function(req, res) {
            Bear.findById(req.params.name, function(err, bear) {
                if (err)
                    res.send(err);
                res.json(bear);
            });
        });

};