$(document).ready(function() {
    //Find the nav link that matches the page title
    var matchString = "a[href*=\"" + document.title.toLowerCase() + "\"]";
    var currentLink = $(matchString);
    currentLink.parent().addClass("active");
    
    //Fill an array of ajax operation promises to load blocks
    var articlePromises = [];
    for (var i = 0; i < 4; i++) {
        articlePromises.push(Q($.get("/block?articleNumber=" + (i + 1))));
    }
    //When finished loading create rows, inserting a clearfix every second item
    Q.all(articlePromises).then(function(blockArray) {
        var columnCount = 0;
       _.each(blockArray, function(block){
           var appendedBlock = loadBlock(block);
           loadLorum(appendedBlock);
           columnCount++;
           if(columnCount > 1) {
               $("#articleRow").append("<div class=\"clearfix\"></div>");
               columnCount = 0;
           }
       });
    });
});
//Appends the block to the #articleRow element
function loadBlock(block) {
    var jBlock = $(block);
    $("#articleRow").append(jBlock);
    return jBlock;
}
//Loads some random lorum text to be appended to each article
function loadLorum(jObj) {
    $.ajax({
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: "jsonp"
    }).done(function(lorumArray) {
        $(".lorum-block", jObj).text(lorumArray[0]);
    });
}