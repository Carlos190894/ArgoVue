<template>
    <div class="login-container">
      <div class="login">
        <img src="../../Images/logo.png" alt="Logo" class="logo" />
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <h2>¿Cual es tu interes en ARGO?</h2>
          </div>
          <div class="form-group">
            <ul class="checkbox-list">
                <li v-for="opcion in opciones" :key="opcion.value" class="checkbox-wrapper">
                <input
                    type="checkbox"
                    :id="'actividad-' + opcion.value"
                    :value="opcion.value"
                    v-model="actividadesSeleccionadas"
                    class="custom-checkbox"
                />
                <label :for="'actividad-' + opcion.value">{{ opcion.label }}</label>
                </li>
            </ul>
            </div>
            <div class="form-group">
                <button type="submit" @click="goToNext">Siguiente
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
    name: 'Login_4',
    methods: {
    goToNext() {
        this.$router.push({ name: 'Login_5' });
      },
    },
  data() {
    return {
      actividadesSeleccionadas: [], // Cambiado a array para manejar múltiples selecciones
      opciones: [
        { value: "conseguir_plantas", label: "Conseguir clientes" },
        { value: "comprar_plantas", label: "Comprar Plantas " },
        { value: "exportar_importar_plantas", label: "Exportar o importar plantas" },
        { value: "conocer_tendencias", label: "Conocer las tendencias del mercado" },
      ],
    };
  },
};
  </script>
  
  <style scoped>
  /* Lista de checkboxes */
    .checkbox-list {
    list-style-type: none; /* Quitar viñetas */
    padding: 0;
    margin: 0;
    }

    .checkbox-wrapper {
    margin-bottom: 8px;
    display: flex;
    align-items: center; /* Centrar verticalmente el checkbox y la etiqueta */
    }

    /* Ocultar diseño predeterminado del checkbox */
    .custom-checkbox {
    position: absolute;
    opacity: 0;
    }

    /* Personalizar el diseño del checkbox */
    .checkbox-wrapper label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #ff6200; /* Borde azul */
    background-color: #f8f9fa; /* Fondo gris claro */
    border-radius: 4px; /* Esquinas ligeramente redondeadas */
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    /* Cambiar color cuando está seleccionado */
    .checkbox-wrapper input:checked + label::before {
    background-color: #ff6200; /* Fondo azul cuando está seleccionado */
    border-color: #ff6200; /* Borde más oscuro */
    content: "✔"; /* Agregar un símbolo de check */
    color: white;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    }

    /* Estilo de la etiqueta */
    .checkbox-wrapper label {
    cursor: pointer; /* Cambiar el cursor cuando pase sobre la etiqueta */
    }
  </style>
  
  <style>
  @import "@/assets/css/login.css"; /* Importa el archivo CSS */
  </style>