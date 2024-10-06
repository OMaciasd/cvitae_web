document.addEventListener('DOMContentLoaded', function () {
    // Cargar la información del currículum al cargar la página
    loadCV();
});

function loadCV() {
    // Puedes cargar la información del currículum desde el backend aquí
    // y actualizar el contenido de #cv-section.
    // Por ejemplo, podrías hacer una solicitud AJAX a tu servidor.

    // Ejemplo:
    // fetch('/api/cv')
    //   .then(response => response.json())
    //   .then(data => {
    //       // Actualizar la sección del currículum con los datos recibidos
    //       // data contiene la información del currículum desde el backend
    //   });
}

function addExperience() {
    // Obtener valores del formulario
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Crear un objeto con la nueva experiencia laboral

    // Puedes enviar la experiencia al backend para ser almacenada en la base de datos (usando AJAX, por ejemplo).

    // Ejemplo:
    // fetch('/api/experience', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(experience),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Manejar la respuesta del backend, por ejemplo, actualizar la lista de experiencias en el frontend.
    // });

    // Actualizar la lista en el frontend (aquí simplemente se agrega un elemento a la lista)
    const experienceList = document.getElementById('experience-list');
    const li = document.createElement('li');
    li.innerHTML = `${jobTitle} en ${company} - ${startDate} a ${endDate}`;
    experienceList.appendChild(li);

    // Limpiar el formulario
    document.getElementById('experience-form').reset();
}
