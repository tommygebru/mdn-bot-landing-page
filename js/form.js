$(function() {
    $('.error').hide();
    
    $("#submit").click(function() {
        // validate form 
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

        // $.ajax({
        //     url: "https://formspree.io/erikhos@outlook.com", 
        //     method: "POST",
        //     data: {message: "hello!"},
        //     dataType: "json",
        //     success: function() {
        //         $('#form').html("<div id='message'></div>");
        //         $('#message').html("<h2>Your message has been sent!</h2>").append("<p>Your feedback is very important to us!. Thank you for using MDNbot!</p>")
        //     }
        // });
        // return false;
    });
});

