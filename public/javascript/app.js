$(document).ready(function() {

  $('#getContacts').on('click', function() {
    $.ajax({
      url: '/contacts',
      method: 'GET',
      success: function(data){
        console.log(data);
        // debugger;
        var parsedData = JSON.parse(data);
        parsedData.forEach(function(contact) {
          $('#results').append('<p>' + contact.firstname + ' ' + contact.lastname + ', ' + contact.email + '</p>')
        });
      }
    });
  });


});
