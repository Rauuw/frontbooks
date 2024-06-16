<template>
    <div class="register-container">
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="firstname">Nombre</label>
          <input
            type="text"
            id="firstname"
            v-model="firstname"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            v-model="lastname"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="country">País</label>
          <input
            type="text"
            id="country"
            v-model="country"
            required
            class="form-control"
          />
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Registrar</button>
        <br>
        <a href="/login">Ya tienes cuenta?</a>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        country: '',
        errorMessage: ''
      }
    },
    methods: {
      async register() {
        try {
          const response = await fetch('https://motivated-youth-production.up.railway.app/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
              firstname: this.firstname,
              lastname: this.lastname,
              country: this.country
            })
          });
  
          const data = await response.json();
  
          if (response.ok) {
            // Almacenar el token en localStorage
            sessionStorage.setItem('token', data.token);
            // Redirigir a la página de inicio
            this.$router.push({ name: 'home' });
          } else {
            // Mostrar mensaje de error
            this.errorMessage = data.message || 'Error en el registro. Por favor, intenta de nuevo.';
          }
        } catch (error) {
          console.error('Error en la petición de registro:', error);
          this.errorMessage = 'Ocurrió un error. Inténtalo de nuevo más tarde.';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    /* Establecer la imagen de fondo */
    background-image: url('https://colexiodivinapastora.com/wp-content/uploads/sites/23/2022/05/Fondo-de-libros.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  