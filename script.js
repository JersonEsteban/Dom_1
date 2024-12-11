const cabecera = document.getElementById('contenido_header');
const contenidoPrincipal = document.getElementById('contenido_main');
const pieDePagina = document.getElementById('contenido_footer');

// Estilo del Body
document.body.style.backgroundColor = '#333'; 
document.body.style.color = 'white'; 
document.body.style.fontFamily = 'Arial, sans-serif'; 

// Estilo de la Cabecera
cabecera.textContent = 'Bienvenido a mi página';
cabecera.style.backgroundImage = "url('imagenes/tareas.jpg')";
cabecera.style.backgroundSize = "cover"; 
cabecera.style.backgroundPosition = "center"; 
cabecera.style.color = 'white';
cabecera.style.padding = '20px';
cabecera.style.textAlign = 'center';
cabecera.style.fontSize = '2rem';

// Creación del Menú
const barraDeNavegacion = document.createElement('nav');
barraDeNavegacion.style.display = 'flex';
barraDeNavegacion.style.justifyContent = 'center';
barraDeNavegacion.style.margin = '10px 0';

const elementosMenu = ['Inicio', 'Tareas', 'Contacto'];
elementosMenu.forEach(item => {
    const elementoMenu = document.createElement('a');
    elementoMenu.textContent = item;
    elementoMenu.href = item === 'Inicio' ? '#inicio' : (item === 'Tareas' ? '#tareas' : '#contacto');
    elementoMenu.style.margin = '0 15px';
    elementoMenu.style.color = 'black'; 
    elementoMenu.style.textDecoration = 'none';
    elementoMenu.style.fontSize = '1.2rem';
    barraDeNavegacion.appendChild(elementoMenu);
});
cabecera.appendChild(barraDeNavegacion);

// Sección de Inicio
const seccionInicio = document.createElement('section');
seccionInicio.id = 'inicio'; 
seccionInicio.style.padding = '20px';
seccionInicio.style.marginTop = '40px'; 

const tituloInicio = document.createElement('h2');
tituloInicio.textContent = 'Bienvenido a Nuestro Sitio';
tituloInicio.style.textAlign = 'center'; 
tituloInicio.style.color = '#fff'; 
seccionInicio.appendChild(tituloInicio);


const textoLorem = document.createElement('p');
textoLorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.';
textoLorem.style.color = '#fff'; 
textoLorem.style.textAlign = 'center'; 
seccionInicio.appendChild(textoLorem);


const imagenInicio = document.createElement('img');
imagenInicio.src = 'imagenes/tareas2.jpg'; 
imagenInicio.style.width = '50%'; 
imagenInicio.style.display = 'block';
imagenInicio.style.margin = '0 auto'; 
seccionInicio.appendChild(imagenInicio);

contenidoPrincipal.appendChild(seccionInicio);

// Sección de Tareas
const seccionTareas = document.createElement('section');
seccionTareas.id = 'tareas'; 
seccionTareas.style.padding = '20px';

const tituloTareas = document.createElement('h2');
tituloTareas.textContent = 'Lista de Tareas';
tituloTareas.style.textAlign = 'center';
tituloTareas.style.color = '#fff'; 
seccionTareas.appendChild(tituloTareas);

const listaDeTareas = document.createElement('ul');
listaDeTareas.style.listStyle = 'none';
listaDeTareas.style.padding = '0';
seccionTareas.appendChild(listaDeTareas);

// Formulario para agregar tareas
const formularioTarea = document.createElement('form');
formularioTarea.style.marginTop = '20px';

const etiquetaTarea = document.createElement('label');
etiquetaTarea.textContent = 'Nueva Tarea: ';
etiquetaTarea.style.color = '#fff'; 
formularioTarea.appendChild(etiquetaTarea);

const inputTarea = document.createElement('input');
inputTarea.type = 'text';
inputTarea.style.marginRight = '10px';
inputTarea.style.padding = '8px';
inputTarea.style.border = '1px solid #ddd';
formularioTarea.appendChild(inputTarea);

const botonAgregarTarea = document.createElement('button');
botonAgregarTarea.textContent = 'Agregar';
botonAgregarTarea.type = 'button';
botonAgregarTarea.style.backgroundColor = '#555'; 
botonAgregarTarea.style.color = 'white';
botonAgregarTarea.style.border = 'none';
botonAgregarTarea.style.padding = '5px 10px';
botonAgregarTarea.style.cursor = 'pointer';
botonAgregarTarea.addEventListener('mouseover', () => {
    botonAgregarTarea.style.backgroundColor = '#777'; 
});

botonAgregarTarea.addEventListener('mouseout', () => {
    botonAgregarTarea.style.backgroundColor = '#555'; 
});

formularioTarea.appendChild(botonAgregarTarea);

seccionTareas.appendChild(formularioTarea);
contenidoPrincipal.appendChild(seccionTareas);

// Formulario de contacto
const seccionContacto = document.createElement('section');
seccionContacto.style.padding = '20px';
seccionContacto.style.marginTop = '40px'; 
seccionContacto.style.backgroundColor = '#444'; 
seccionContacto.id = 'contacto'; 

const tituloContacto = document.createElement('h2');
tituloContacto.textContent = 'Formulario de Contacto';
tituloContacto.style.textAlign = 'center'; 
tituloContacto.style.color = '#fff'; 
seccionContacto.appendChild(tituloContacto);

const formularioContacto = document.createElement('form');
formularioContacto.style.display = 'flex';
formularioContacto.style.flexDirection = 'column';
formularioContacto.style.maxWidth = '600px';
formularioContacto.style.margin = '0 auto'; 
formularioContacto.style.backgroundColor = '#555'; 
formularioContacto.style.padding = '20px';
formularioContacto.style.borderRadius = '8px'; 

// Nombre
const etiquetaNombre = document.createElement('label');
etiquetaNombre.textContent = 'Nombre:';
etiquetaNombre.style.color = '#fff'; 
formularioContacto.appendChild(etiquetaNombre);

const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.required = true;
inputNombre.style.marginBottom = '10px';
inputNombre.style.padding = '8px';
inputNombre.style.border = '1px solid #ddd'; 
formularioContacto.appendChild(inputNombre);

// Correo electrónico 
const etiquetaCorreo = document.createElement('label');
etiquetaCorreo.textContent = 'Correo Electrónico:';
etiquetaCorreo.style.color = '#fff'; 
formularioContacto.appendChild(etiquetaCorreo);

const inputCorreo = document.createElement('input');
inputCorreo.type = 'email';
inputCorreo.required = true;
inputCorreo.style.marginBottom = '10px';
inputCorreo.style.padding = '8px';
inputCorreo.style.border = '1px solid #ddd'; 
formularioContacto.appendChild(inputCorreo);

// Asunto
const etiquetaAsunto = document.createElement('label');
etiquetaAsunto.textContent = 'Asunto:';
etiquetaAsunto.style.color = '#fff'; 
formularioContacto.appendChild(etiquetaAsunto);

const inputAsunto = document.createElement('input');
inputAsunto.type = 'text';
inputAsunto.required = true;
inputAsunto.style.marginBottom = '10px';
inputAsunto.style.padding = '8px';
inputAsunto.style.border = '1px solid #ddd'; 
formularioContacto.appendChild(inputAsunto);

// Mensaje
const etiquetaMensaje = document.createElement('label');
etiquetaMensaje.textContent = 'Escribe tu mensaje:';
etiquetaMensaje.style.color = '#fff'; 
formularioContacto.appendChild(etiquetaMensaje);

const inputMensaje = document.createElement('textarea');
inputMensaje.rows = '5';
inputMensaje.required = true;
inputMensaje.style.marginBottom = '10px';
inputMensaje.style.padding = '8px';
inputMensaje.style.border = '1px solid #ddd'; 
formularioContacto.appendChild(inputMensaje);

// Botón de Enviar
const botonEnviar = document.createElement('button');
botonEnviar.textContent = 'Enviar Mensaje';
botonEnviar.type = 'submit';
botonEnviar.style.backgroundColor = '#555'; 
botonEnviar.style.color = 'white';
botonEnviar.style.border = 'none';
botonEnviar.style.padding = '10px';
botonEnviar.style.cursor = 'pointer';
botonEnviar.addEventListener('mouseover', () => {
    botonEnviar.style.backgroundColor = '#777'; 
});

botonEnviar.addEventListener('mouseout', () => {
    botonEnviar.style.backgroundColor = '#555'; 
});

formularioContacto.appendChild(botonEnviar);

seccionContacto.appendChild(formularioContacto);
contenidoPrincipal.appendChild(seccionContacto);

// Pie de Página
pieDePagina.textContent = '@jerson_pacheco';
pieDePagina.style.backgroundColor = '#333'; 
pieDePagina.style.color = 'white'; 
pieDePagina.style.textAlign = 'center'; 
pieDePagina.style.padding = '10px';
pieDePagina.style.position = 'absolute'; 
pieDePagina.style.width = '100%';

// Interacción de formulario de tareas
botonAgregarTarea.addEventListener('click', () => {
    if (inputTarea.value.trim() !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = inputTarea.value;
        nuevaTarea.style.backgroundColor = '#444'; 
        nuevaTarea.style.margin = '5px 0';
        nuevaTarea.style.padding = '10px';
        nuevaTarea.style.border = '1px solid #ddd';
        listaDeTareas.appendChild(nuevaTarea);
        inputTarea.value = ''; 
    }
});



