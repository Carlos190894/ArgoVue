<template>
    <div class="login-container">
      <div class="login">
        <img src="../Images/logo.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <h2>Enhorabuena</h2>
          </div>
          <div class="form-group">
            <h2>Haz creado tu perfil con exito!</h2>
          </div>
          <div class="form-group">
            <button type="submit" @click="goToNext">Conoce Argo
                    <span class="arrow">→</span>
            </button>
          </div>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from "axios";
  
  export default {
    name: 'Login_5',
    methods: {
    goToNext() {
        this.$router.push({ name: 'Login_6' });
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