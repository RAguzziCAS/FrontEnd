$(document).ready(function(){

    $("#menu").click(function(){
        $("#sidebar").toggle(250);
    })

    $('#btnGestionar').click(function(){
        document.getElementById("pages").innerHTML = '<object class="full" type="text/html" data="./pages/inventario/inventario.html"></object>';
    })

});