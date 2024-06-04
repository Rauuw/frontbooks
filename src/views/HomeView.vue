<template>
  <div class="home-container">
    <header class="hero">
      <h1>Bienvenido a la Gestión de Libros</h1>
      <p>Administra los libros fácilmente</p>
    </header>
    <section class="features">
      <div class="feature">
        <h2>Agregar Nuevos Libros</h2>
        <p>Ingresa detalles de nuevos libros y manten tu colección actualizada.</p>
      </div>
      <div class="feature">
        <h2>Editar Información de Libros</h2>
        <p>Actualiza los detalles de tus libros existentes con facilidad.</p>
      </div>
      <div class="feature">
        <h2>Eliminar Libros</h2>
        <p>Remueve libros que ya no desees en tu colección.</p>
      </div>
      <div class="feature">
        <h2>Ver Todos los Libros</h2>
        <p>Consulta la lista completa de todos los libros en tu colección.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
}

.hero {
  background-color: #4CAF50;
  color: white;
  padding: 40px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5em;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.feature {
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  margin-top: 0;
  color: #4CAF50;
}

.feature p {
  margin-bottom: 0;
  color: #555;
}
</style>
