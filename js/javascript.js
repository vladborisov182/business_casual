//Инициализация Google maps
$(function () {
    
    function initMap() {

        var location = new google.maps.LatLng(48.4500000, 34.9833300);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 10,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});



//Проветка формы обратной связи
$(document).ready(function() {
    $("button[type='submit']").bind("click", valid);
});


function valid() {
    var name = $("input[type='text']").val();
    var email = $("input[type='email']").val();
    var tel = $("input[type='tel']").val();
    var msg = $(".msg").val(); 
    var count = 0;

    if (!name) {
        count++;
        $(".name").addClass("has-error");
        setTimeout(function(){
            $('.name').removeClass('has-error');
          },2000);
    }

    if (!email) {
        count++;
        $(".email").addClass("has-error");
        setTimeout(function(){
            $('.email').removeClass('has-error');
          },2000);
    }
    
    if (!tel) {
        count++;
        $(".tel").addClass("has-error");
        setTimeout(function(){
            $('.tel').removeClass('has-error');
          },2000);
    }

    if (!msg) {
        count++;
        $(".message").addClass("has-error");
        setTimeout(function(){
            $('.message').removeClass('has-error');
          },2000);
    }

    //Тут должна быть отправка формы
    //Но пока будет так
    if (count == 0) {
        alert("Name: " + name + "\n\r" +
              "Email Address: " + email + "\n\r" +   
              "Phone Number: " + tel + "\n\r" + 
              "Message: " + msg + "\n\r" +
              "Thank you! We will contact you!");
        location.reload();
    }
}


//Инициализация галереи
$('body').flipLightBox()

