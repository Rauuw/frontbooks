<template>
    <div class="container mt-5">
      <h2>{{ book.titulo }}</h2>
      <h3>{{ book.autor }}</h3>
      <p>{{ book.texto }}</p>
      <button @click="readText" class="btn btn-primary" :disabled="speaking">Leer en Voz Alta</button>
      <button @click="pauseText" class="btn btn-warning" :disabled="!speaking || paused">Pausar</button>
      <button @click="resumeText" class="btn btn-success" :disabled="!paused">Reanudar</button>
      <button @click="stopText" class="btn btn-danger" :disabled="!speaking">Detener</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {},
        speaking: false,
        paused: false
      };
    },
    mounted() {
      this.fetchBook();
    },
    methods: {
      fetchBook() {
        const bookId = this.$route.params.id;
        fetch(`https://microservicebooks-production.up.railway.app/books/${bookId}`)
          .then(response => response.json())
          .then(data => {
            this.book = data;
          })
          .catch(error => {
            console.error('Error fetching book:', error);
          });
      },
      readText() {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(this.book.texto);
          utterance.onstart = () => {
            this.speaking = true;
            this.paused = false;
          };
          utterance.onend = () => {
            this.speaking = false;
            this.paused = false;
          };
          window.speechSynthesis.speak(utterance);
        } else {
          alert('Tu navegador no soporta la síntesis de voz.');
        }
      },
      pauseText() {
        if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          this.paused = true;
        }
      },
      resumeText() {
        if ('speechSynthesis' in window && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          this.paused = false;
        }
      },
      stopText() {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          this.speaking = false;
          this.paused = false;
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
  button {
    margin-right: 10px;
  }
  </style>
  