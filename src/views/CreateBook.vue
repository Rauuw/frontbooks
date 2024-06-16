<template>
    <div class="container mt-5">
      <h2>Crear Nuevo Libro</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="input-title" class="form-label">Título</label>
          <input
            type="text"
            class="form-control"
            id="input-title"
            v-model="book.titulo"
            required
            placeholder="Ingrese el título del libro"
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
            placeholder="Ingrese el autor del libro"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-genre" class="form-label">Género</label>
          <input
            type="text"
            class="form-control"
            id="input-genre"
            v-model="book.genero"
            placeholder="Ingrese el género del libro"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-year" class="form-label">Año</label>
          <input
            type="number"
            class="form-control"
            id="input-year"
            v-model="book.ano"
            placeholder="Ingrese el año de publicación"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-publisher" class="form-label">Editorial</label>
          <input
            type="text"
            class="form-control"
            id="input-publisher"
            v-model="book.editorial"
            placeholder="Ingrese la editorial del libro"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-description" class="form-label">Descripción</label>
          <textarea
            class="form-control"
            id="input-description"
            v-model="book.descripcion"
            placeholder="Ingrese una descripción del libro"
          ></textarea>
        </div>
  
        <div class="mb-3">
          <label for="input-pages" class="form-label">Páginas</label>
          <input
            type="number"
            class="form-control"
            id="input-pages"
            v-model="book.paginas"
            placeholder="Ingrese el número de páginas"
          />
        </div>
  
        <div class="mb-3">
          <label for="input-language" class="form-label">Idioma</label>
          <input
            type="text"
            class="form-control"
            id="input-language"
            v-model="book.idioma"
            placeholder="Ingrese el idioma del libro"
          />
        </div>

        <div class="mb-3">
          <label for="input-texto" class="form-label">Texto</label>
          <textarea
            class="form-control"
            id="input-texto"
            v-model="book.texto"
            placeholder="Ingrese el texto del libro"
          ></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {
          titulo: '',
          autor: '',
          genero: '',
          ano: '',
          editorial: '',
          descripcion: '',
          paginas: '',
          idioma: '',
          texto: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        fetch('https://microservicebooks-production.up.railway.app/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.book)
        })
        .then(response => {
          if (response.ok) {
            alert('Libro creado exitosamente!');
            this.$router.push('home');
          } else {
            alert('Error al crear el libro');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error al crear el libro');
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
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
  </style>
  