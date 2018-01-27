$('document').ready(function () {
    var pantalla = $('.pantalla');
    var contenidoPantalla = pantalla.text();
    $('.boton').on("click", function () {
        var btnclick = $(this).text();
        contenidoPantalla += '' + btnclick;
        if ('=' === btnclick) {
            contenidoPantalla = contenidoPantalla.slice(0, -1);
            operar(contenidoPantalla);
        }
        if ('C' === btnclick) {
            pantalla.html('');
            contenidoPantalla = "";
        }
        pantalla.html(contenidoPantalla);
    });
});

function operar(contenidoPantalla) {
    console.log(contenidoPantalla);
}
