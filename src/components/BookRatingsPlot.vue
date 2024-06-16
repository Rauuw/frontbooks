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
        ratingsImageUrl: "https://dashboardpython-production-4851.up.railway.app/books/ratings/plot" // Ajusta la URL si es necesario
      };
    }
  };
  </script>
  