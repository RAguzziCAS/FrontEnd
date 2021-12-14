function Cargar() {

    CargarLista();

    var tb = document.getElementById('tbEstudiantes');
    var body = tb.getElementsByTagName('tbody')[0];

    for(let estudiante of estudiantes){
        var row = body.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
    
        cell1.innerHTML = estudiante.cedula;
        cell2.innerHTML = estudiante.nombre;
        cell3.innerHTML = estudiante.edad;
    }
}

