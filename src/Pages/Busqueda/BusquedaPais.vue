<template>
    <div class="login-container">
      <div class="login">
        <div class="btn-regresar">
          <button type="submit" @click="goToBack">Regresar</button>
        </div>
        <img src="../../Images/logo_color.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <h2>Selecciona un País</h2>
          </div>
          <div class="country-item" v-for="country in countries" :key="country.name">
            <img :src="country.flag" :alt="country.name" class="flag" />
            <span class="country-name">{{ country.name }}</span>
            <label class="switch">
              <input type="checkbox" v-model="country.selected" />
              <span class="slider"></span>
            </label>
          </div>
          <div class="btn-guardar">
            <button type="submit" @click="goToNext">Guardar</button>
          </div>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
</template>
  <style>
    @import "@/assets/css/fonts.css"; /* Importa el archivo CSS */
  </style>
  <script>
  //import axios from "axios";
  
  export default {
    name: 'BusquedaPais',
    methods: {
    goToNext() {
        this.$router.push({ name: 'ArgoBusqueda' });
    },
    goToBack() {
        this.$router.push({ name: 'ArgoBusqueda' });
      },
    },
    data() {
      return {
        countries: [
          {
            name: "México",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
            selected: false,
          },
          {
            name: "Estados Unidos",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            selected: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* .login-container {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh; /* Altura de toda la ventana */
    /*margin: 0; /* Eliminar márgenes del body 
  }*/

.form-group{
  margin: 5%;
}

.login{
  border-radius: 20px;
  background: rgba(255, 248, 236, 0.8); /* Negro con 40% de opacidad: ajusta aquí */
}
.country-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8%;
  border-bottom: 1px solid #ddd;
}

.country-item:last-child {
  border-bottom: none;
}

.flag {
  width: 30px;
  height: 20px;
  border-radius: 3px;
  margin-right: 10px;
}

.country-name {
  flex-grow: 1;
  text-align: left;
}

.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ff6200;
}

input:checked + .slider::before {
  transform: translateX(14px);
}

.logo{
  width: 100%; /* Ajusta el tamaño */
  margin: 0 auto; /* Centra la imagen horizontalmente */
  display: block;
}

.btn-guardar{
  display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
}

.btn-regresar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

</style>