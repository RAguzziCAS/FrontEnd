function MostrarDatos(formulario){

    persona = {
        name: formulario.nombre.value,
        lastname1: formulario.apellido1.value,
        lastname2:  formulario.apellido2.value,
        age: formulario.edad.value
    }

    json =JSON.stringify(persona);
    
    localStorage.setItem('persona', btoa(json))

}

function CargarDatos(){

    persona = localStorage.getItem('persona');
    persona = atob(persona);
    persona = JSON.parse(persona);

    document.getElementById("txtreadnombre").value = persona.name;
    document.getElementById("txtreadapellido1").value = persona.lastname1;
    document.getElementById("txtreadapellido2").value = persona.lastname2;
    document.getElementById("txtreadedad").value = persona.age;

}

window.onload = CargarDatos;

