angular.module('starter.services', [])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  
  var chats = [{
    id: 0,
    name: 'Complaint',
    lastText: 'File a Complaint',
    face: 'img/Repair-icon.png',
    page:'templates/notification-detail.html'
    
  },{
    id: 1,
    name: 'Status',
    lastText: 'Check Status of Complains',
    face: 'img/Accept-icon.png',
    page:'templates/suggest-detail.html'
    
  },{
    id: 2,
    name: 'Notification',
    lastText: 'Notifications about request',
    face: 'img/notification.png',
    page:'demo.html'
   
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      console.log("I clicked on a function");
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    navigate:function(page){
      console.log("navigate to page");
    }
  };
});
