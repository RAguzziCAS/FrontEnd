/* CUANDO EL DOCUMENTO ESTE LISTO */
$(document).ready(function () {

    /* CREA ESTE LISTENER */
    $('#btncrear').click(function () {
        $('#caja').width(150);
        $('#caja').height(150);
        $('#caja').css('background-color','yellow')
    });

    $('#btnsweet').click(function(){
        swal("Te saludo", "hola muy buenos dias", "success")
    })

    $('#btnalternar').click(function () {
        $('#caja').toggle(1000,function(){
            swal("Termino")
        });
    });
    
})

