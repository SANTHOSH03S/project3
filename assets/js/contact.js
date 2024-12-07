   
  function sendMail() {
            var name = $("#name");
            var email = $("#email");
            var subject = $("#subject");
            var message = $("#message");
            if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
                $.ajax({
                   url: 'assets/php/mail.php',
                   method: 'POST',
                   dataType: 'json',
                   data: {
                       name: name.val(),
                       email: email.val(),
                       subject: subject.val(),
                       message: message.val()
                   }, success: function (response) {
                        $('#contact-form')[0].reset();
                        $('.sent-msg').text("Message Sent Successfully.");
                   }
                });
            } 

        }
        
        function isNotEmpty(caller,response) {
          
            if (caller.val() == "") {
                caller.css('border', '1px solid #0060ae');
                $('.sent-msg').text("Please enter enough information.");
                return false;
            }              
            else { 
                caller.css('border', '');             
                return true;
          }
               
      }
      