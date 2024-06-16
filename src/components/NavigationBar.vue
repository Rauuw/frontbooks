<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">LibrosApp</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/home">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/index_books">Lista de Libros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/create_book">Crear Libro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/dashboard">Dashboard</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about">Acerca de</router-link>
          </li> -->
          <li class="nav-item">
            <button @click="logout" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      // Elimina el token del almacenamiento local
      sessionStorage.removeItem('token');

      // Redirige a la página de login
      this.$router.push({ name: 'login' });
    }
  }
};
</script>
  
<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
  