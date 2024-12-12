 const urlApi = "https://pokeapi.co/api/v2/pokemon";

  // Obtener la lista de Pokémon
  fetch(urlApi)
    .then(response => response.json())
.then(datos => {
  // Obtener la URL del primer Pokémon
  const bulbasaur = datos.results[0].url;
  // Obtener los detalles del primer Pokémon
  fetch(bulbasaur)
    .then(response => response.json())
    .then(pokemonDetails => {
      document.getElementById("imagen1").src = pokemonDetails.sprites.front_default;
        document.getElementById("nameBulbasaur").textContent = pokemonDetails.name;
        document.getElementById("enlace_bulbasaur").href = pokemonDetails.species.url;
        
        const primerTipo = pokemonDetails.types[0].type.name;
        document.getElementById("tipo1B").textContent = primerTipo; 
        
         const segundoTipo = pokemonDetails.types[1].type.name;
        document.getElementById("tipo2B").textContent = segundoTipo; 
         
        const pesoB = pokemonDetails.weight
        document.getElementById("pesoB").textContent =`${pesoB}kg` ;

        const alturaB = pokemonDetails.height
        document.getElementById("alturaB").textContent =`${alturaB}m` 
        
    });

  // Obtener la URL de Charmander (índice 4 en la lista)
  const charmanderUrl = datos.results[3].url;
  
  fetch(charmanderUrl)
    .then(response => response.json())
    .then(charmanderDetails => {
        console.log("Detalles de Charmander:", charmanderDetails); // Puedes usar estos datos como quieras
         document.getElementById("imagen2").src = charmanderDetails.sprites.front_default;
        document.getElementById("nameCharmander").textContent = charmanderDetails.name;
        document.getElementById("enlace_charmander").href = charmanderDetails.species.url;

         const primerTipo = charmanderDetails.types[0].type.name;
        document.getElementById("tipo1C").textContent = primerTipo; 
        
       
         
        const pesoC = charmanderDetails.weight
        document.getElementById("pesoC").textContent =`${pesoC}kg` ;

        const alturaC = charmanderDetails.height
        document.getElementById("alturaC").textContent =`${alturaC}m` 
        
    });
    const squirtleUrl = datos.results[6].url;
  
  fetch(squirtleUrl)
    .then(response => response.json())
    .then(squirtlDetails => {
        console.log("Detalles de Squirtl:", squirtlDetails); // Puedes usar estos datos como quieras
        document.getElementById("imagen3").src = squirtlDetails.sprites.front_default;
        document.getElementById("nameSquirtl").textContent = squirtlDetails.name;
      document.getElementById("enlace_squirtl").href = squirtlDetails.species.url;
          const primerTipo = squirtlDetails.types[0].type.name
        document.getElementById("tipo1S").textContent = primerTipo;
        
       
         
        const pesoS = squirtlDetails.weight
        document.getElementById("pesoS").textContent =`${pesoS}kg` ;

        const alturaS = squirtlDetails.height
        document.getElementById("alturaS").textContent =`${alturaS}m` 
    });
});


const pokebola = document.getElementById("pokebola");
const pokemonCapturado = document.getElementById("pokemonCapturado");
const cerrar = document.getElementById("cerrar");

pokebola.addEventListener("click", () => {
    pokebola.style.display = "none"
    pokemonCapturado.style.display = "flex"
    
});

cerrar.addEventListener("click", () => {
    pokemonCapturado.style.display = "none"

    set
    
});


const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');

function validarNombre() {
  const name = nameInput.value.trim(); // Quita espacios al inicio y al final

  // 1. Verificar si está vacío
  if (name === '') {
    nameError.textContent = 'El nombre no puede estar vacío.';
    return false;
  }

  // 2. Verificar longitud mínima
  if (name.length < 3) {
    nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return false;
  }

  // 3. Verificar solo letras y espacios
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!regex.test(name)) {
    nameError.textContent = 'El nombre solo puede contener letras y espacios.';
    return false;
  }

  // Si todo está bien, limpiamos el mensaje de error
  nameError.textContent = '';
  return true;
}

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

function validarCorreo() {
  const email = emailInput.value.trim(); // Quita espacios al inicio y al final

  // 1. Verificar si está vacío
  if (email === '') {
    emailError.textContent = 'El correo no puede estar vacío.';
    return false;
  }

  // 2. Verificar formato de correo
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    emailError.textContent = 'Por favor, ingresa un correo válido.';
    return false;
  }

  // Si todo está bien, limpiamos el mensaje de error
  emailError.textContent = '';
  return true;
}
const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');

function validarMensaje() {
  const message = messageInput.value.trim(); // Quita espacios al inicio y al final

  // 1. Verificar si está vacío
  if (message === '') {
    messageError.textContent = 'El mensaje no puede estar vacío.';
    return false;
  }

  // 2. Verificar longitud mínima
  if (message.length < 10) {
    messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
    return false;
  }

  // 3. Verificar longitud máxima (opcional)
  if (message.length > 500) {
    messageError.textContent = 'El mensaje no puede exceder los 500 caracteres.';
    return false;
  }

  // Si todo está bien, limpiamos el mensaje de error
  messageError.textContent = '';
  return true;
}




// Cuando el usuario deja de escribir, validamos el nombre
nameInput.addEventListener('input', validarNombre);

// Validamos cuando el usuario escribe en el campo de correo
emailInput.addEventListener('input', validarCorreo);
// Validamos cuando el usuario escribe en el campo de mensaje
messageInput.addEventListener('input', validarMensaje);