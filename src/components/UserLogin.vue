<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
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
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.error {
  color: red;
}
</style>