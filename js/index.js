$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}

	$('.nav-menu a').click(function() {
		var click_id=$(this).attr('id');
		if (click_id != $('.nav-menu a.active').attr('id') ) {
			$('.nav-menu a').removeClass('active');
			$(this).addClass('active');
			$('.content .item-block').removeClass('active');
			$('#block_' + click_id).addClass('active');
		}
		return false;
	})
});