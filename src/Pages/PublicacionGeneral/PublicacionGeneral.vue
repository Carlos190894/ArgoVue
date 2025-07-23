<template>
  <div class="login-container">
    <div class="profile-container">
      <div class="login">
        <!-- <div class="btn-regresar">
          <button type="submit" @click="goToBack">Regresar</button>
        </div> -->
        <img :src="logoSrc" alt="Logo" class="logo" />
        <div style="text-align: center;">
          <label class="section-label">
            ¿Qué vas a publicar? <span class="arrow">&#9654;</span>
          </label>
        </div>
        <div class="texto">
          <label class="section-label">
            ¿Dónde se encuentra tu producto? <span class="arrow">&#9654;</span>
          </label>
        </div>
        <div class="contenedor-input">
          <input
            class="input-generales"
            type="text"
            placeholder="Título de la publicación"
            style="margin-bottom: 5%;"
            v-model="form.titulo"
          />
          <input
            class="input-generales"
            type="text"
            placeholder="Nombre del producto"
            v-model="form.nombreProducto"
          />
        </div>
        <div class="texto" @click="showModal = true" style="cursor:pointer;">
          <label class="section-label">
            ¿Cuál es la presentación de tu producto? <span class="arrow">&#9654;</span>
          </label>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
          <div class="modal-content">
            <!-- Título -->
            <div class="modal-title-row" style="text-align: center; justify-content: center;">
              <span class="modal-title">Seleccionar Imagenes <br> para tu publicación</span>
              <span class="arrow" style="font-size: 1.7em; margin-left: 8px;">&#9654;</span>
            </div>

            <!-- Imagen principal y miniaturas -->
            <div class="img-section">
              <div class="img-label">Imagen de tu producto</div>
              <div class="img-main" @click="triggerInput(0)">
                <img
                  :src="previewImages[0] || placeholderMain"
                  alt="Producto"
                  class="main-photo"
                />
                <input
                  ref="fileInputs[0]"
                  type="file"
                  accept="image/*"
                  style="display: none"
                  @change="onImageChange($event, 0)"
                />
              </div>
              <div class="img-thumbs">
                <div class="thumb" v-for="n in 3" :key="n" @click="triggerInput(n)">
                  <img
                    :src="previewImages[n] || placeholderThumb"
                    alt="Miniatura"
                    class="thumb-img"
                  />
                  <span v-if="!previewImages[n]" class="plus-sign">+</span>
                  <input
                    ref="el => fileInputs[n] = el"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="onImageChange($event, n)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contenedor-input">
          <input
            class="input-generales"
            type="text"
            placeholder="Tamaño"
            style="margin-bottom: 5%;"
            v-model="form.tamano"
          />
          <textarea
            class="input-generales"
            placeholder="Describe tu producto"
            v-model="form.descripcion"
            rows="2"
          ></textarea>
        </div>
        <div class="texto">
          <label class="input-label">Precio unitario :</label>
          <input
          class="input-secundarios"
          type="text"
          placeholder="$0"
          v-model="form.tamano"
          />
        </div>
        <div class="texto">
          <label class="input-label">Cantidad disponible :</label>
          <input
          class="input-secundarios"
          type="text"
          placeholder="0"
          v-model="form.tamano"
          />
        </div>
      </div>
      <footer class="app-footer">
      <i class="fa-solid fa-house" @click="goHome" style="color: #461404;"></i>
      <i class="icon search"  @click="goSearch">🔍</i>
      <i class="icon add" style="font-size: 35px;">➕</i>
      <i class="icon chat" @click="goChat">💬</i>
      <i class="fa-regular fa-circle-user" @click="goPerfil" style="font-size: 30px; background: white ; color: #461404; border-radius: 25px;"></i>
    </footer>
    </div>
  </div>
</template>

<style>
  @import "@/assets/css/fonts.css"; /* Importa el archivo CSS */
</style>


<script setup>
  // import { ref } from "vue";
  // const showModal = ref(false);
  import { ref, reactive } from 'vue';
  const showModal = ref(false);
  // Guarda las imágenes seleccionadas como URLs locales
  const previewImages = reactive([null, null, null, null]);
  // Referencias para los inputs de archivo
  const fileInputs = reactive([ref(null), ref(null), ref(null), ref(null)]);

  const placeholderMain = 'https://dummyimage.com/260x110/cef0fc/ffffff.png&text=';
  const placeholderThumb = 'https://dummyimage.com/55x50/cef0fc/ffffff.png&text=';

  function onImageChange(event, index) {
    const file = event.target.files[0];
    if (file) {
      previewImages[index] = URL.createObjectURL(file);
    }
  }

  function triggerInput(index) {
    // Dispara el input correspondiente
    if (fileInputs[index]) {
      fileInputs[index].click();
    }
  }

  const form = reactive({
    titulo: '',
    nombreProducto: '',
    tamano: '',
    descripcion: '',
    precioUnitario: 0,
    cantidadDisponible: 0
  })
</script>
<script>
export default {
  methods: {
    goHome() {
        this.$router.push({ name: 'ArgoPage' });
    },
    goToBack(){
        this.$router.push({ name: 'ArgoPage' });
    },
    goSearch(){
      this.$router.push({ name: 'ArgoBusqueda'})
    },
    goPerfil(){
      this.$router.push({ name: 'PerfilUsuario'})
    },
    goChat(){
      this.$router.push({ name: 'ChatInicial'})
    },
  },
  data() {
    return {
      logoSrc: require('@/Images/logo_color.png')
    };
  },
};
</script>

<style scoped>
.app-footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 65px; /* Ajusta según tu diseño */
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000; /* Para que esté por encima de otros elementos */
  padding: 0 12px;
}

.login{
  width: 100%;
  height: 750px;
  max-height: 750px;
  overflow-y: auto;      /* Scroll solo interno */
  border-radius: 20px;
}

.texto{
  margin-top: 5%;
  justify-content: end;
}

.section-label{
  font-size: 18px;
  font-weight: bold;
  padding-top: 5%;
}

.contenedor-input{
  text-align: center;
  align-content: center;
  justify-content: center
}

.input-generales{
  width: 85%;
  /* margin-top: 5%; */
}

.input-label{
  margin-right: 10px;
}

.input-secundarios{
  width: 40%;
}

.logo {
  width: 70%; /* Ajusta el tamaño */
  /*margin: 20px auto 10px auto; /* Centra la imagen horizontalmente */
  display: block;
  max-width: 260px;
}

.btn-regresar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.arrow {
  font-weight: bold;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0005;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: #fff;
  border-radius: 18px;
  padding: 24px 18px 24px 18px;
  min-width: 320px;
  max-width: 95vw;
  min-height: 320px;
  box-shadow: 0 0 18px #0003;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-title-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 18px;
}

.modal-title {
  font-weight: bold;
  font-size: 1.17em;
  text-align: left;
  line-height: 1.13em;
}

.img-section {
  background: #e9e9e9;
  border-radius: 18px;
  padding: 14px 14px 10px 14px;
  width: 270px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-label {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 1.04em;
}

.img-main {
  background: transparent;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

.main-photo {
  width: 240px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.img-thumbs {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.thumb {
  position: relative;
  width: 48px;
  height: 45px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thumb-img {
  width: 42px;
  height: 38px;
  border-radius: 8px;
  object-fit: cover;
  background: #cef0fc;
}
.plus-sign {
  position: absolute;
  font-size: 1.8em;
  color: #333;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
  pointer-events: none;
  /* Para superponer el "+" sobre la miniatura */
}
</style>