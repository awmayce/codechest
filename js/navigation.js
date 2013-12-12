$(document).ready(function() {

    // Tooltips
    $('nav .navbar-header a').tooltip({ placement: 'bottom' });


  	$('.nav-progress-bar div').width('90%');

	$('.click-nav ul li ul.profile-dropdown li').css('border-bottom', '1px solid #fff');
	$('.click-nav ul li ul.profile-dropdown li').last().css('border-bottom', '0px solid #fff');
});

// Search bar animation
$(document).ready(function() {
    $('#search input').hide();

    $("#search").hover(function() {
        $('#search input').animate({width: 'toggle'});
    });
});