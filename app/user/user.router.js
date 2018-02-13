// app/routes.js
module.exports = function(app, passport) {
    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form
    app.post('/login', passport.authenticate('local-login',function(err, user, info) {
        if(err){res.send("error")}
       res.send("logged in")
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
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.send("not logged")
}
