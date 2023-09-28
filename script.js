// Función para agregar una nueva tarea a la lista
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const tareaTexto = nuevaTareaInput.value.trim();
    
    if (tareaTexto !== "") {
        // Crear un nuevo elemento de lista <li>
        const nuevaTarea = document.createElement("li");

        // Crear una casilla de verificación <input type="checkbox">
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

            // Agregar un manejador de eventos para el cambio en la casilla de verificación
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    nuevaTarea.style.textDecoration = "line-through"; // Aplicar estilo de línea cuando se marca
                    nuevaTarea.style.color = "gray" /* colocar color gris */
                } else {
                    nuevaTarea.style.textDecoration = "none";  // Quitar estilo de línea cuando se desmarca
                }
            });

            // Agregar el texto de la tarea a la lista
            nuevaTarea.appendChild(checkbox);
            nuevaTarea.appendChild(document.createTextNode(tareaTexto));

        // Agregar un botón de eliminación
        const eliminarBoton = document.createElement("button");
        eliminarBoton.textContent = "Eliminar";

            // Aplicar un margen al botón de eliminación
            eliminarBoton.style.marginLeft = "10px";
            
            // Agregar un manejador de eventos para el clic en el botón de eliminación
            eliminarBoton.addEventListener("click", function() {
                // Eliminar el elemento <li> padre
                nuevaTarea.parentNode.removeChild(nuevaTarea);
            });

            // Agregar el botón de eliminación al elemento <li>
            nuevaTarea.appendChild(eliminarBoton);

        // Agregar la tarea a la lista
        const listaTareas = document.getElementById("listaTareas");
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de entrada
        nuevaTareaInput.value = "";
    }
}

