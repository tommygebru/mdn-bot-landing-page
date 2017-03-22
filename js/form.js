$(function() {
    $('.error').hide();
    $("#submit").click(function() {
      // validate and process form here
      
      $('.error').hide();
        var email = $("input#email").val();
        if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
      }
        var message = $("#message").val();
        if (message == "") {
        $("label#message_error").show();
        $("#message").focus();
        return false;
      }
      
      //alert (dataString);return false;
      $.ajax({
        url: "https://formspree.io/erikhos@outlook.com", 
        method: "POST",
        data: {message: "hello!"},
        dataType: "json",
        success: function() {
          $('#form').html("<div id='message'></div>");
          $('#message').html("<h2>Contact Form Submitted!</h2>")
          .append("<p>We will be in touch soon.</p>")
          .hide()
        }
      });
      return false;
    });
});

