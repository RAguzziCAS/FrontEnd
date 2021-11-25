function Transformar(){
    elemento = document.getElementById("primera");

    elemento.classList.remove('col-2');
    elemento.classList.add('col-6');

}

function Change(){

    elemento = document.getElementById("primera");
    elemento.classList.toggle('col-2');
}

function All(){

    elementos = document.getElementsByTagName("section");

    for(element of elementos){
        element.classList.toggle('d-none');
    }
}