var express = require('express');
var bodyParser = require('body-parser');
var sendgrid = require('sendgrid')("vanhouc", "RiNNawZy5JSq");
var app = express();

app.set('view engine', 'jade');

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.post("/feedback", function(req, res) {
    var payload = {
        to: 'vanhouc@mail.nmc.edu',
        from: 'bot@tcoutsiders.com',
        subject: req.body.type,
        text: "A user has provided some " + req.body.type + " for you: \n" + req.body.text
    };
    sendgrid.send(payload, function(err, json) {
        if (err) {
            return console.error(err);
        }
        console.log(json);
    });
});
app.get("/feedback", function(req, res) {
    res.redirect("/public/index.html");
});
app.get("/restaurants", function(req, res) {
    res.render("restaurants");
});
app.get("/bars", function(req, res) {
    res.render("bars");
});
app.get("/landmarks", function(req, res) {
    res.render("landmarks");
});
app.get("/block", function(req, res) {
    res.render("contentBlock", {
        articleNumber: req.query.articleNumber
    });
});
app.get("/index", function(req, res) {
    res.redirect("/public/index.html");
});
app.get("/", function(req, res) {
    res.redirect("/public/index.html");
});
app.listen(process.env.PORT, function() {
    console.log('Listening on port %d', process.env.PORT);
});