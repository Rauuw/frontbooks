<template>
    <div class="container mt-5">
      <h2>Editar Libro</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="input-title" class="form-label">Título</label>
          <input
            type="text"
            class="form-control"
            id="input-title"
            v-model="book.titulo"
            required
          />
        </div>
  
        <div class="mb-3">
          <label for="input-author" class="form-label">Autor</label>
          <input
            type="text"
            class="form-control"
            id="input-author"
            v-model="book.autor"
            required
          />
        </div>
  
        <div class="mb-3">
          <label for="input-genre" class="form-label">Género</label>
          <input
            type="text"
            class="form-control"
            id="input-genre"
            v-model="book.genero"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-year" class="form-label">Año</label>
          <input
            type="number"
            class="form-control"
            id="input-year"
            v-model="book.ano"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-publisher" class="form-label">Editorial</label>
          <input
            type="text"
            class="form-control"
            id="input-publisher"
            v-model="book.editorial"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-description" class="form-label">Descripción</label>
          <textarea
            class="form-control"
            id="input-description"
            v-model="book.descripcion"
          ></textarea>
        </div>
  
        <div class="mb-3">
          <label for="input-pages" class="form-label">Páginas</label>
          <input
            type="number"
            class="form-control"
            id="input-pages"
            v-model="book.paginas"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-language" class="form-label">Idioma</label>
          <input
            type="text"
            class="form-control"
            id="input-language"
            v-model="book.idioma"
          />
        </div>
        
        
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {}
      };
    },
    created() {
      const bookId = this.$route.params.id;
      this.loadBook(bookId);
    },
    methods: {
      loadBook(id) {
        fetch(`https://microservicebooks-production.up.railway.app/books/${id}`)
          .then(response => response.json())
          .then(data => {
            this.book = data;
          })
          .catch(error => {
            console.error('Error fetching book:', error);
          });
      },
      handleSubmit() {
        fetch(`https://microservicebooks-production.up.railway.app/books/${this.book.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.book)
        })
        .then(response => {
          if (response.ok) {
            alert('Libro actualizado exitosamente.');
            this.$router.push({ name: 'books' });
          } else {
            alert('Error al actualizar el libro.');
          }
        })
        .catch(error => {
          console.error('Error updating book:', error);
          alert('Error al actualizar el libro.');
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 20px auto;

    background-image: url('https://colexiodivinapastora.com/wp-content/uploads/sites/23/2022/05/Fondo-de-libros.jpg');
    background-size: cover;
    background-position: center;
  }
  </style>
  