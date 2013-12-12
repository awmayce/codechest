$(document).ready(function() {

    $("#ask-question .parttwo").hide();

    // notifications tab
    $("#user-content .part-2").hide();
    $("#user-content .part-3").hide();

    // Vote size
    $(".answers .answer .vote").each(function() {
      var questionHeight = $(this).parent().height() + 25;
      $(this).css('height', questionHeight+'px');
    });
});

// Question block
$("#ask-question .parttwo").hide();
function questionNext() {
    $("#ask-question .partone").hide();
    $("#ask-question .parttwo").show();
}
function questionPrevious() {
    $("#ask-question .parttwo").hide();
    $("#ask-question .partone").show();
}

// Code Blocks
function newCodeBlockOne() {
  // Change Button style
  $("#ask-question #codeblockone").html('1');
  $("#ask-question #codeblockone").removeClass('btn-default');
  $("#ask-question #codeblockone").addClass('btn-primary');

  // Change button link
  $("#myModal button.btn.btn-primary").removeAttr('onclick');
  $("#myModal button.btn.btn-primary").attr('onclick', 'codeBlockOne()');

  // Append new button
  $("#ask-question .parttwo .small").append('<button class="btn btn-default pull-left" id="codeblocktwo" data-toggle="modal" data-target="#myModalTwo">+</button>');

  // Add value to form
  var codeBlockOneValue = $("#myModal textarea").val();
  $("#code-one-value").val(codeBlockOneValue);
}

function codeBlockOne() {
  // Add value to form
  var codeBlockOneValue = $("#myModal textarea").val();
  $("#code-one-value").val(codeBlockOneValue);
}

function newCodeBlockTwo() {
  // Change Button style
  $("#ask-question #codeblocktwo").html('2');
  $("#ask-question #codeblocktwo").removeClass('btn-default');
  $("#ask-question #codeblocktwo").addClass('btn-primary');

  // Change button link
  $("#myModalTwo button.btn.btn-primary").removeAttr('onclick');
  $("#myModalTwo button.btn.btn-primary").attr('onclick', 'codeBlockTwo()');

  // Append new button
  $("#ask-question .parttwo .small").append('<button class="btn btn-default pull-left" disabled>+</button>');

  // Add value to form
  var codeBlockTwoValue = $("#myModalTwo textarea").val();
  $("#code-two-value").val(codeBlockTwoValue);
}

function codeBlockTwo() {
  // Add value to form
  var codeBlockTwoValue = $("#myModalTwo textarea").val();
  $("#code-two-value").val(codeBlockTwoValue);
}

function notificationTab(number) {
  $("#user-content ul li").removeClass("active");
  $("#user-content li.notification-tab-"+number).addClass("active");

  $("#user-content .show").hide();
  $("#user-content .show").removeClass("show");
  $("#user-content .part-"+number).show();
  $("#user-content .part-"+number).addClass("show");
}

/* Notifications */

function alertNewFollower(name, link) {
  toastr.info('<a href="'+link+'">'+name+'</a> has stared following you', 'New Follower');
 }

 function alertError(message) {
  toastr.error(message, 'Error');
 }

 function alertInfo(message) {
  toastr.info(message, 'Info');
 }

 function alertSuccess(message) {
  toastr.success(message, 'Success');
 }

 function alertWarning(message) {
  toastr.warning(message, 'Warning');
 }

// Profile
$(document).ready(function() {

  $("#user .user-block").hide();
  $("#user .profile").show();

  $("#user select").change(function() {
    var profileValue = $("#user select").val();
    var profileLowerValue = profileValue.toLowerCase();
    
    $("#user .user-block").slideUp(500);
    $("#user ." + profileLowerValue).delay(500).slideDown();
  });
});

