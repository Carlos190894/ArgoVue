<template>
    <div class="login-container">
      <div class="login">
        <img src="../../Images/logo.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
          </div>
          <div class="form-group">
            <h2>¿Quieres que ARGO te envie notificaciones?</h2>
          </div>
          <div class="form-group">
            <button type="submit" @click="goToNext">Permitir
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
    name: 'Login_6',
    methods: {
    goToNext() {
        this.$router.push({ name: 'Home' });
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