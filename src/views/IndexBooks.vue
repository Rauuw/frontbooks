<template>
    <div class="container mt-5">
      <h2>Lista de Libros</h2>
      <div class="books-grid">
        <div v-for="book in books" :key="book.id" class="book-card">
          <div class="book-cover">{{ book.titulo }}</div>
          <div class="book-details">
            <p class="book-author">{{ book.autor }}</p>
            <p class="book-genre">{{ book.genero }}</p>
            <p class="book-year">{{ book.ano }}</p>
          </div>
          <div class="book-actions">
            <router-link :to="{ name: 'edit_book', params: { id: book.id } }" class="btn btn-primary">Editar</router-link>
            <router-link :to="{ name: 'view_book', params: { id: book.id } }" class="btn btn-secondary">Ver</router-link>
            <button @click="deleteBook(book.id)" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: []
      };
    },
    mounted() {
      this.fetchBooks();
    },
    methods: {
      fetchBooks() {
        fetch('https://microservicebooks-production.up.railway.app/books/allBooks')
          .then(response => response.json())
          .then(data => {
            this.books = data;
          })
          .catch(error => {
            console.error('Error fetching books:', error);
          });
      },
      deleteBook(bookId) {
        if (confirm(`¿Estás seguro de que deseas eliminar el libro?`)) {
          fetch(`https://microservicebooks-production.up.railway.app/books/${bookId}`, {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                this.fetchBooks(); // Actualizar la lista de libros
                alert('Libro eliminado correctamente.');
              } else {
                alert('Error al eliminar el libro.');
              }
            })
            .catch(error => {
              console.error('Error deleting book:', error);
              alert('Error al eliminar el libro.');
            });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 20px auto;

    background-image: url('https://colexiodivinapastora.com/wp-content/uploads/sites/23/2022/05/Fondo-de-libros.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .book-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%; /* Ajusta la altura según sea necesario */
  }
  
  .book-cover {
    width: 100%;
    height: 200px; /* Aumenta la altura para que la portada sea más grande */
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .book-details {
    text-align: center;
    font-size: 0.9em;
  }
  
  .book-actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  .btn {
    padding: 5px 10px;
  }
  
  .btn-primary, .btn-secondary, .btn-danger {
    padding: 8px 16px; /* Aumenta el tamaño de los botones */
    font-size: 1em; /* Ajusta el tamaño del texto de los botones */
  }
  </style>
  