function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;

    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость перемещения: " + speed + "<br/>");
};

function error(obj) {
    document.write("Ошибка при определении положения");
};
navigator.geolocation.getCurrentPosition(success, error);
