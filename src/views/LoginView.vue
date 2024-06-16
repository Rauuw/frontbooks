<template>
    <body>

        <div class="login-container">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Nombre de Usuario</label>
                    <input type="text" id="username" v-model="username" required class="form-control" />
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" v-model="password" required class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
                <a href="/register">Registrar nuevo usuario</a>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            </form>
        </div>
    </body>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await fetch('https://motivated-youth-production.up.railway.app/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;

                    // Almacenar el token en el almacenamiento local o en algún otro lugar seguro
                    sessionStorage.setItem('token', token);

                    // Redirigir a la página de inicio
                    this.$router.push({ name: 'home' });
                } else {
                    // Mostrar mensaje de error
                    this.errorMessage = 'Credenciales incorrectas';
                }
            } catch (error) {
                console.error('Error en la petición de login:', error);
                this.errorMessage = 'Ocurrió un error. Inténtalo de nuevo más tarde.';
            }
        }
    }
};
</script>
  
<style scoped>
.login-container {
    max-width: 400px;
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

.form-group {
    margin-bottom: 15px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
  