
$(function(){
    $('#fadein img:gt(0), #fadein2 img:gt(0), #fadein3 img:gt(0), #fadein4 img:gt(0), #mainWindow img:gt(0)').hide();
	setInterval(function(){
	    $('#fadein :first-child').fadeOut(000)
		    .next('img').fadeIn(1000)
		    .end().appendTo('#fadein');
	    $('#fadein2 :first-child').fadeOut(000)
            .next('img').fadeIn(1000)
            .end().appendTo('#fadein2');
	    $('#fadein3 :first-child').fadeOut(000)
            .next('img').fadeIn(1000)
            .end().appendTo('#fadein3');
	    $('#fadein4 :first-child').fadeOut(000)
            .next('img').fadeIn(1000)
            .end().appendTo('#fadein4');
	    $('#mainWindow :first-child').fadeOut(000)
            .next('img').fadeIn(1000)
            .end().appendTo('#mainWindow');
	}, 2000);
});

