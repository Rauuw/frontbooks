<template>
    <div>
      <h2>Gráfico de Ratings</h2>
      <img :src="ratingsImageUrl" alt="Gráfico de Ratings" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ratingsImageUrl: "http://localhost:8000/books/ratings/plot" // Ajusta la URL si es necesario
      };
    }
  };
  </script>
  