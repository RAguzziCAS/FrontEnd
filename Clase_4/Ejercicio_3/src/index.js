
function Saludar() {
    window.alert("Hola a todos")
}

function SaludarNuevo() {
    swal({
        title: "Soy el titulo!!",
        text: "Esto es una alerta con sweet alert",
        icon: "success",
    });
}

function Cambiar(color) {
    var div = document.getElementById("articulo2");
    div.style.backgroundColor = color;
}