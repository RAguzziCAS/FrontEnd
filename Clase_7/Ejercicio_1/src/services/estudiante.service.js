var estudiantes = []

function CargarLista(){
    estudiantes = JSON.parse(atob(localStorage.getItem('lista')));
}

function GuardarLista(){
    localStorage.setItem('lista',btoa(JSON.stringify(estudiantes)));
}