<template>
  <div class="login-container">
    <div class="login">
      <img src="../../Images/logo.png" alt="Logo" class="logo" />
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <h2>Iniciar Sesión</h2>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label><br>
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="form-group">
          <button type="submit" @click="goHome">Ingresar</button>
        </div>
        <div class="form-group">
            <button type="submit" @click="goToRegister">Registrarse</button>
        </div>
      </form>
      <!-- <p v-if="error" class="error">{{ error }}</p> -->
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  // data() {
  //   return {
  //     email: "",
  //     password: "",
  //     error: null,
  //   };
  // },
  methods: {
    // async handleLogin() {
    //   try {
    //     this.error = null;
    //     const response = await axios.post("https://api.ejemplo.com/login", {
    //       email: this.email,
    //       password: this.password,
    //     });
    //     // Guardar el token o información del usuario en localStorage o Vuex
    //     localStorage.setItem("token", response.data.token);
    //     this.$router.push("/dashboard");
    //   } catch (err) {
    //     this.error = "Credenciales inválidas. Por favor, intenta nuevamente.";
    //   }
    // },
    goToRegister() {
      this.$router.push({ name: 'Login_1' });
    },
    goHome() {
      this.$router.push({ name: 'ArgoPage'})
    },
  },
};
</script>

<style scoped>
/* - Style unicamente para cambios de estilos a esta pagina */
</style>

<style>
@import "@/assets/css/login.css"; /* Importa el archivo CSS */
</style>