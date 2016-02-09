
var Contacts = {

  getContacts: function() {
    $.getJSON('/contacts', Contacts.showContacts)
  },

  showContacts: function(data) {
    $("#contactlist").empty();
    $.each(data, function(index, contact) {
      $('#contactlist').append('<p>Name: ' + contact.firstname + ' ' + contact.lastname + ', email: ' + contact.email);
    });
  },

};


$(function() {
  $("#getContacts").on('click', Contacts.getContacts);
  $("#addContact").on('click', Contacts.addContact);

});
