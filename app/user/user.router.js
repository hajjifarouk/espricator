// app/routes.js
var User            = require('../user/user.model');
module.exports = function(app, passport) {
    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form
    app.post('/login', passport.authenticate('local-login',function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.

        console.log( res);
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.send("logged out");
    });
    app.get('/', function(req, res) {
        res.send("welcome to espricator");
    });
    app.get('/add', function(req, res) {
        var user  =  new User({
            "local" : {
                "email" : "tt3",
                "password" : "tt3"
            }
        });
        user.save(function(err,res){
                if(err) console.log(err);
                console.log(res);
        });
       
        res.send("welcome to espricator");
    });
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.send("not logged")
}
