var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use("/public", express.static(__dirname + "/public"));


app.get("/restaurant", function (req, res) {
    res.render("restaurant");
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
app.get("/", function (req, res) {
    res.render("index");
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port %d', process.env.PORT);
});