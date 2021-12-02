function CargarDashboard() {
    document.getElementById("wrapper-body").innerHTML = '<object class="full" type="text/html" data="./pages/dashboard/dashboard.html" ></object>';
}

function CargarInsertar() {
    document.getElementById("wrapper-body").innerHTML = '<object class="full" type="text/html" data="./pages/insertar/insertar.html" ></object>';
    Ajustar();
}

function Ajustar() {

    header = document.getElementById("header");
    header.offsetHeight;
    console.log(header.offsetHeight);
}

