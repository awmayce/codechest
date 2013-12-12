$(document).ready(function() {
	
	// Show/Hide Submit button
	$('#RegisterModal ul.nav li a').on('shown.bs.tab', function() {
		$('#reg-prev').removeAttr('disabled');
		$('#reg-next').removeClass('hidden');
		$('#reg-submit').addClass('hidden');
	});

	$('#RegisterModal ul.nav li a:last').on('shown.bs.tab', function() {
		$('#reg-next').addClass('hidden');
		$('#reg-submit').removeClass('hidden');
	});

	$('#RegisterModal ul.nav li a').first().on('shown.bs.tab', function() {
		$('#reg-prev').attr("disabled", true);
	});

	// Previus / Next buttons
	$('#reg-prev').click(function(){
	  $('.nav > .active').prev('li').find('a').trigger('click');
	});
	$('#reg-next').click(function(){
	  $('.nav > .active').next('li').find('a').trigger('click');
	});

	// Registration Validation
	var username = new LiveValidation('new-username', { onInvalid: function(){ $('#new-username').css('border', '1px solid red'); }, onValid: function(){ $('#new-username').css('border', '1px solid green'); } });
	username.add(Validate.Length, { minimum: 5, maximum: 16 });

	var fullname = new LiveValidation('new-fullname', { onInvalid: function(){ $('#new-fullname').css('border', '1px solid red'); }, onValid: function(){ $('#new-fullname').css('border', '1px solid green'); } });
	fullname.add(Validate.Length, { minimum: 3, maximum: 255 });

	var email = new LiveValidation('new-email', { onInvalid: function(){ $('#new-email').css('border', '1px solid red'); }, onValid: function(){ $('#new-email').css('border', '1px solid green'); } });
	email.add(Validate.Email, { failureMessage: "Please enter valid email address" });

	var jobCompany = new LiveValidation('new-company', { onInvalid: function(){ $('#new-company').css('border', '1px solid red'); }, onValid: function(){ $('#new-company').css('border', '1px solid green'); } });
	jobCompany.add(Validate.Length, {minimum: 3, maximum: 255});

	var jobRole = new LiveValidation('new-job-role', { onInvalid: function(){ $('#new-job-role').css('border', '1px solid red'); }, onValid: function(){ $('#new-job-role').css('border', '1px solid green'); } });
	jobRole.add(Validate.Length, {minimum: 3, maximum: 255});

	var valTwitter = new LiveValidation('new-twitter', { onInvalid: function(){ $('#new-twitter').css('border', '1px solid red'); }, onValid: function(){ $('#new-twitter').css('border', '1px solid green'); } });
	valTwitter.add(Validate.Format, { pattern: /^[A-Za-z0-9_]{1,15}$/ });

	var valPassword = new LiveValidation('new-password', { onInvalid: function(){ $('#new-password').css('border', '1px solid red'); }, onValid: function(){ $('#new-password').css('border', '1px solid green'); } });
	valPassword.add(Validate.Length, {minimum: 5, maximum: 16});

	var confirmPassword = new LiveValidation('new-confirm-password', { onInvalid: function(){ $('#new-confirm-password').css('border', '1px solid red'); }, onValid: function(){ $('#new-confirm-password').css('border', '1px solid green'); } });
	confirmPassword.add(Validate.Confirmation, { match: 'new-password' });

	// On User Registration
	$("#reg-submit").on('click', function() {
		var username = $("#new-username").val();
		toastr.info("The user " + username + " has been successfully created. To complete registration, please confirm your email address", "User Created!");
	})
	

});

function ValidateSuccess(id) {
	$(id).css('outline', 'green');
}

function ValidateFail(id) {
	$(id).css('outline', 'red');
}
