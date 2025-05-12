<template>
    <div class="login-container">
      <div class="login">
        <img src="../../Images/logo.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <h2>Informacion</h2>
          </div>
          <div class="form-group">
            <label for="nombre">Pais</label>
          </div>
          <div class="form-group">
            <input type="text" id="pais" v-model="pais" />
          </div>
          <div class="form-group">
            <label for="estado">Estado</label>
          </div>
          <div class="form-group">
            <input type="text" id="estado" v-model="estado" />
          </div>
          <div class="form-group">
            <label for="actividad">Actividad Principal</label>
          </div>
          <div class="form-group">
           <ul class="radio-list">
                <li v-for="opcion in opciones" :key="opcion.value" class="radio-wrapper">
                    <input
                    type="radio"
                    :id="'actividad-' + opcion.value"
                    :value="opcion.value"
                    v-model="actividad"
                    class="custom-radio"
                    />
                    <label :for="'actividad-' + opcion.value">{{ opcion.label }}</label>
                </li>
            </ul>
          </div>
          <div class="form-group">
            <button type="submit" @click="goToNext">Siguiente</button>
          </div>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from "axios";
  
  export default {
    name: 'Login_2',
    methods: {
    goToNext() {
        this.$router.push({ name: 'Login_3' });
      },
    },
    data() {
    return {
      actividad: "", // Variable para el valor seleccionado
      opciones: [
        { value: "Productor", label: "Productor / Vendedor" }, // Primera opción
        { value: "Comprador", label: "Comprador / Distribuidor" }, // Segunda opción
        { value: "Comercializadora", label: "Comercializadora" }, // Nueva opción
      ],
    };
  },
  };
  </script>
  
  <style scoped>
  </style>
  
  <style>
  @import "@/assets/css/login.css"; /* Importa el archivo CSS */
  </style>