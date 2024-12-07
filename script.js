function haritaGoster() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(konumAI, hata);
    } else {
        document.getElementById("harita").innerHTML = "Tarayıcı Geolocation desteklemiyor";
    }
}

function konumAI(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var haritaURL = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2494624.753525908!2d" + longitude + "!3d" + latitude + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2snl!4v1733580289109!5m2!1str!2snl";
    document.getElementById("harita").innerHTML = "<iframe src='" + haritaURL + "' width='600' height='450' style='border:0;' allowfullscreen='true' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
}

function hata(error) {
    var mesaj = "";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mesaj = "İzin verilmedi";
            break;
        case error.POSITION_UNAVAILABLE:
            mesaj = "Konum analiz edilemiyor";
            break;
        case error.TIMEOUT:
            mesaj = "Zaman Aşımı";
            break;
        case error.UNKNOWN_ERROR:
            mesaj = "Bilinmeyen hata";
            break;
    }
    document.getElementById("harita").innerHTML = mesaj;
}
