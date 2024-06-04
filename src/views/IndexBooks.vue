<template>
    <div class="container mt-5">
        <h2>Lista de Libros</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Género</th>
                    <th>Año</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.titulo }}</td>
                    <td>{{ book.autor }}</td>
                    <td>{{ book.genero }}</td>
                    <td>{{ book.ano }}</td>
                    <td>
                        <router-link :to="{ name: 'edit_book', params: { id: book.id } }" class="btn btn-primary">Editar</router-link>
                        <button @click="deleteBook(book.id)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
// import { useRouter } from 'vue-router';

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
            fetch('http://localhost:8080/books/allBooks')
                .then(response => response.json())
                .then(data => {
                    this.books = data;
                })
                .catch(error => {
                    console.error('Error fetching books:', error);
                });
        },
        deleteBook(bookId) {
            if (confirm(`¿Estás seguro de que deseas eliminar el libro con el ID ${bookId}?`)) {
                fetch(`http://localhost:8080/books/${bookId}`, {
                    method: 'DELETE'
                })
                    .then(response => {
                        if (response.ok) {
                            // Eliminación exitosa, actualizar la lista de libros
                            this.fetchBooks();
                            alert('Libro eliminado correctamente.');
                        } else {
                            // Ocurrió un error al eliminar el libro
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
    max-width: 800px;
    margin: 20px auto;
}
</style>
  