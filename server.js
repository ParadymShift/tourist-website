var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use("/public", express.static(__dirname + "/public"));

app.get("/restaurants", function (req, res) {
    res.render("restaurants");
});
app.get("/bars", function (req, res) {
    res.render("bars");
});
app.get("/landmarks", function (req, res) {
    res.render("landmarks");
});
app.get("/block", function (req, res) {
    res.render("contentBlock", {articleNumber: req.query.articleNumber});
});
app.get("/index", function (req, res) {
    res.redirect("/public/index.html");
});
app.get("/", function (req, res) {
    res.redirect("/public/index.html");
});
app.listen(process.env.PORT, function(){
    console.log('Listening on port %d', process.env.PORT);
});