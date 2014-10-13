$(document).ready(function() {
    var articlePromises = [];
    for (var i = 0; i < 4; i++) {
        articlePromises.push(Q($.get("/block?articleNumber=" + (i + 1))));
    }
    Q.all(articlePromises).then(function(blockArray) {
        var columnCount = 0;
       _.each(blockArray, function(block){
           var appendedBlock = loadBlock(block);
           loadLorum(appendedBlock);
           columnCount++;
           if(columnCount > 1) {
               $("#articleRow").append("<div class=\"clearfix visible-md-block\"></div>");
               columnCount = 0;
           }
       })
    });
});

function loadBlock(block) {
    var jBlock = $(block);
    $("#articleRow").append(jBlock);
    return jBlock;
}

function loadLorum(jObj) {
    $.ajax({
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: "jsonp"
    }).done(function(lorumArray) {
        $(".lorum-block", jObj).text(lorumArray[0]);
    });
}