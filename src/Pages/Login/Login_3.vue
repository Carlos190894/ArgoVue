<template>
    <div class="login-container">
      <div class="login">
        <img src="../../Images/logo.png" alt="Logo" class="logo" />
        <div class="profile-uploader">
            <h2>Selecciona tu foto de perfil</h2>
            <div class="image-preview" @click="triggerFileInput">
            <img v-if="imageURL" :src="imageURL" alt="Vista previa" />
            <div v-else class="placeholder"></div>
            </div>
            <input
            type="file"
            ref="fileInput"
            accept="image/*"
            @change="onImageSelected"
            class="file-input"
            />
            <button class="next-button" @click="goToNextStep">Siguiente 
                <span class="arrow">→</span>
            </button>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      imageURL: null, // URL de la imagen seleccionada
    };
  },
  methods: {
    // Simula un clic en el input de archivo
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    // Maneja la selección de la imagen
    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageURL = URL.createObjectURL(file); // Crea una URL temporal para mostrar la imagen
      }
    },
    // Lógica para el botón "Siguiente" (puede ser personalizada)
    goToNextStep() {
      if (this.imageURL) {
        alert("¡Imagen seleccionada! Puedes continuar al siguiente paso.");
        this.$router.push({ name: 'Login_4' });
        // Aquí puedes agregar lógica para avanzar al siguiente paso
      } else {
        alert("Por favor, selecciona una imagen antes de continuar.");
      }
    },
  },
};
</script>
<style scoped>
  /* - Style unicamente para cambios de estilos a esta pagina */
    .profile-uploader {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    h2 {
    font-size: 18px;
    margin-bottom: 20px;
    }

    .image-preview {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    /*background-color: #808080; /* Color de fondo gris */
    background-image: url('../../Images/icono_color.png'); /* Ruta de la imagen */
    background-size: cover;
    border: 2px solid #ff6200; /* Borde azul con un grosor de 5px */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    overflow: hidden; /* Ocultar partes de la imagen que se salgan del contenedor */
    position: relative;
    }

    .placeholder {
    width: 100%;
    height: 100%;
    background-image: url('../../Images/icono_color.png'); /* Ruta de la imagen */
    background-size: cover;
    border-radius: 50%;
    }

    .image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen al contenedor */
    }

    .file-input {
    display: none; /* Oculta el input de archivo */
    }

    .arrow {
    margin-left: 10px;
    font-size: 18px;
    }
</style>
<style>
  @import "@/assets/css/login.css"; /* Importa el archivo CSS */
</style>