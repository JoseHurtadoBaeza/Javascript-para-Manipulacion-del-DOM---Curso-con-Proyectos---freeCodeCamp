const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea(){
    if (input.value){
        // Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        // Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        // Agregar tarea a lista
        listaDeTareas.appendChild(tareaNueva);
        
    } else {
        alert('Por favor ingresa una tarea');
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada'); // Con toggle conseguimos que si el elemento tiene la clase completada, esta se elimina y en caso contrario se añade
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});