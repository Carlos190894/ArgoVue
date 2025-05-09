<template>
    <div class="login-container">
      <div class="login">
        <img src="../Images/logo.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <h2>Informacion</h2>
          </div>
          <div class="form-group">
            <label for="nombre">Nombre de usuario</label>
          </div>
          <div class="form-group">
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div class="form-group">
            <label for="nombreNegocio">Nombre de negocio</label>
          </div>
          <div class="form-group">
            <input type="text" id="nombreNegocio" v-model="nombreNegocio" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label><br>
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="form-group">
            <button type="submit">Siguiente</button>
          </div>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from "axios";
  
  export default {
    name: 'Login_1',
  };
  </script>
  
  <style scoped>
  /* - Style unicamente para cambios de estilos a esta pagina */
  </style>
  
  <style>
  @import "@/assets/css/login.css"; /* Importa el archivo CSS */
  </style>