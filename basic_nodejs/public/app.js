var lock = null;
var userProfile;

$(document).ready(function() {
 lock = new Auth0Lock('4Y8O3igLBwrgXm2vD0PyEphKhftTXzJy', 'oneforthejob.eu.auth0.com');
});


$('.btn-login').click(function(e) {
  e.preventDefault();
  lock.show(function(err, profile, token) {
    if (err) {
      alert('There was an error');
    } else {
      localStorage.setItem('userToken', token);
      userProfile = profile;
    }
  });
});

$.ajaxSetup({
  'beforeSend': function(xhr) {
    if (localStorage.getItem('userToken')) {
      xhr.setRequestHeader('Authorization',
        'Bearer ' + localStorage.getItem('userToken'));
    }
  }
});

$('.call-data').on('click',function(event){
  $.get("/api/applicants/", function(data, status){
    console.log(status)
    console.log(data)
  });
})

$("form").submit(function(event){
  event.preventDefault()
  console.log(userProfile)
  var data = {
    name : event.target.programme.value,
    client: {
      email: userProfile.name,
      clientID: userProfile.clientID
    }
  }
  $.post("/api/programmes/", data,
    function(data, status){
      console.log(status)
      console.log(data)
    });
});

$('.log-out').on('click',function(event){
  localStorage.removeItem('token');
  localStorage.userToken = null;
  window.location.href = "/";
})





// $('.nick').text(userProfile.nickname);