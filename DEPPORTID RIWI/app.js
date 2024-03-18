// Selecciona el elemento de video
var video = document.getElementById("miVideo");

// Escucha el evento "ended" y reinicia el video
video.addEventListener("ended", function() {
    video.currentTime = 0; // Reinicia la reproducción al principio del video
    video.play(); // Inicia la reproducción automáticamente
});