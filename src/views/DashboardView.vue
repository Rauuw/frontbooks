<template>
    <div>
      <h1>Dashboard</h1>
      <book-ratings-plot></book-ratings-plot>
      <books-year-plot></books-year-plot>
    </div>
  </template>
  
  <script>
  import BookRatingsPlot from '../components/BookRatingsPlot.vue';
  import BooksYearPlot from '../components/BooksYearPlot.vue';
  
  export default {
    components: {
      BookRatingsPlot,
      BooksYearPlot
    }
  };
  </script>
  