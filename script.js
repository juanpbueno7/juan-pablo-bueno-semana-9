// Custom Event para el inicio de sesión exitoso
const loginEvent = new CustomEvent('login', { detail: { user: null } });

// Custom Event para la creación de cuenta exitosa
const createAccountEvent = new CustomEvent('create-account', { detail: { user: null } });

// Función para mostrar la pantalla de inicio de sesión
function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'block';
  document.getElementById('create-account-screen').style.display = 'none';
  document.getElementById('logged-in-screen').style.display = 'none';
}

// Función para mostrar la pantalla de crear cuenta
function showCreateAccountScreen() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('create-account-screen').style.display = 'block';
  document.getElementById('logged-in-screen').style.display = 'none';
}

// Función para mostrar la pantalla de usuario logueado
function showLoggedInScreen(user) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('create-account-screen').style.display = 'none';
  document.getElementById('logged-in-screen').style.display = 'block';

  // Actualizar el mensaje de bienvenida al usuario logueado
  document.getElementById('logged-in-user').textContent = `Hasta pronto!`;
}

// Función para cerrar la sesión del usuario
function logout() {
  localStorage.removeItem('currentUser');
  showLoginScreen();
}

// Obtener el usuario logueado actualmente, si hay uno
const currentUser = localStorage.getItem('currentUser');

// Escuchar el evento de inicio de sesión exitoso
document.addEventListener('login', event => {
  // Guardar el usuario logueado en local storage
  localStorage.setItem('currentUser', event.detail.user);
  // Mostrar la pantalla de usuario logueado
  showLoggedInScreen(event.detail.user);
});

// Escuchar el evento de creación de cuenta exitosa
document.addEventListener('create-account', event => {
  // Guardar el usuario logueado en local storage
  localStorage.setItem('currentUser', event.detail.user);
  // Mostrar la pantalla de usuario logueado
  showLoggedInScreen(event.detail.user);
});

// Si hay un usuario logueado, mostrar la pantalla de usuario logueado, sino mostrar la pantalla de inicio de sesión
if (currentUser) {
  showLoggedInScreen(currentUser);
} else {
  showLoginScreen();
}