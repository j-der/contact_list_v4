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

  addContact: function() {

    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var emailAddress = $('#email').val();

    var newContact = {
      firstname: firstName,
      lastname: lastName,
      email: emailAddress
    };
    $.post('contacts/create', newContact, Contacts.addedContact, 'json');
  },

  addedContact: function(data) {
    if (data.result) {
      Contacts.getContacts();
    }
    else {
      alert("Oops, something weird happened. Please try again.")
    }
  },

  findContact: function(data) {
    $("#contactlist").empty();
    var searchTerm = $('#searchterm').val();

  }
};

$(function() {
  $("#getContacts").on('click', Contacts.getContacts);
  $("#addContact").on('click', Contacts.addContact);

});
