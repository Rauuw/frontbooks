<template>
    <div>
      <h2>Gráfico de Libros por Año</h2>
      <input v-model="startYear" placeholder="Año de inicio" type="number">
      <input v-model="endYear" placeholder="Año de fin" type="number">
      <button @click="fetchYearPlot">Ver</button>
      <br>
      <img v-if="yearPlotImageUrl" :src="yearPlotImageUrl" alt="Gráfico de Libros por Año">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startYear: '',
        endYear: '',
        yearPlotImageUrl: ''
      };
    },
    methods: {
      fetchYearPlot() {
        if (this.startYear && this.endYear) {
          this.yearPlotImageUrl = `https://dashboardpython-production-4851.up.railway.app/books/year/plot?start_year=${this.startYear}&end_year=${this.endYear}`;
        }
      }
    }
  };
  </script>
  