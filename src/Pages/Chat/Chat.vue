
<template>
  <div class="login-container">
    <div class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div>
          <button class="regresar"><i class="fa-solid fa-circle-left" style="margin-right: 15px;"></i>Regresar</button>
        </div>

        <div class="header-icons" style="position: relative;">
          <i class="fa-solid fa-bars menu-desplegable" @click="toggleMenu"></i>
          <!-- Menu desplegable -->
          <div v-if="showMenu" class="dropdown-menu" @click.stop>
            <div class="dropdown-item" @click="reportarPerfil">Reportar perfil</div>
            <hr />
            <div class="dropdown-item" @click="soporte">Soporte</div>
            <hr />
            <div class="dropdown-item" @click="eliminar">Eliminar</div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="app-content">
          <section class="section">
              <i class="fa-regular fa-circle-user icon" style="font-size: 30px;"></i>
              <label id="nombreVivero" style="font-weight: bold; margin-top: 10px;" for="">Vivero Atlixco</label>
              <label id="nombreVivero" style="font-weight: bold; margin-top: 10px;" for="">Sin Subscripcion</label>
          </section>

          <section class="section-chat">
              <i class="fa-regular fa-circle-user icon" style="font-size: 40px;"></i>
              <div class="contenidoChat" style="width: 80%; margin-left: 25px;">
                  <label for="" class="chat1">Vivero atlixco</label><br>
                  <label for="" class="chat1">Pregunta para informacion ?</label>
              </div>
          </section>

          <section class="section-chat">
              <div class="contenidoChatCliente" style="width: 80%; margin-right: 25px;">
                  <label for="" class="chat1">Section para responder la preguntar y continuar con el chat</label>
              </div>
              <i class="fa-regular fa-circle-user icon" style="font-size: 40px;"></i>
          </section>
      </main>
      <div class="textConversacion">
        <div>
          <i class="fa-solid fa-camera" style="font-size: 35px;"></i>
        </div>
        <div>
          <input type="text" label="Aa" style="width: 260px; height: 35px; margin-left: 15px; margin-right: 15px;">
        </div>
        <div>
          <i class="fa-solid fa-gauge-high" style="font-size: 35px; margin-bottom: 5px;"></i>
        </div>
      </div>
      <!-- Footer Navigation -->
      <footer class="app-footer">
          <i class="fa-solid fa-house icon" @click="goToHome"></i>
        <!-- <i class="icon home" style="font-size: 30px;">🏠</i> -->
        <i class="icon search" @click="goSearch">🔍</i>
        <i class="icon add">➕</i>
        <i class="icon chat" style="font-size: 35px;">💬</i>
        <i class="icon settings">⚙️</i>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPrincipal",
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    goToHome() {  
      this.$router.push({ name: 'ArgoPage' });
    },
    goSearch(){
      this.$router.push({ name: 'ArgoBusqueda'});
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showMenu = false;
      }
    },
    reportarPerfil() {
      // Lógica para reportar perfil
      this.showMenu = false;
    },
    soporte() {
      // Lógica para soporte
      this.showMenu = false;
    },
    eliminar() {
      // Lógica para eliminar
      this.showMenu = false;
    },
  },
};
</script> 
<style>
  @import "@/assets/css/fonts.css"; /* Importa el archivo CSS */
</style>
<style scoped>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #f8f9fa;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10% 15px;
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 70px;
  height: 70px;
  background-image: url('../../Images/logo.png'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: white; /* Cambia el color del texto si es necesario */
  text-align: center; /* Centra el texto horizontalmente */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
  margin-right: 50px;
}

.header-icons .icon {
  font-size: 25px;
  cursor: pointer;
}

/* Menu Reportar */
.menu-desplegable{
  font-size: 25px;
}
.header-icons {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 35px;
  right: 0;
  width: 170px;
  background: #f6f6f6;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.09);
  z-index: 100;
  padding: 10px 0;
  text-align: center;
}
.dropdown-item {
  padding: 10px 0;
  cursor: pointer;
  color: #232323;
  font-size: 16px;
}
.dropdown-item:hover {
  background: #ececec;
}
hr {
  margin: 0;
  border: none;
  border-top: 1px solid #ccc;
}

/* Main Content */
.app-content {
  flex: 1;
  padding: 10px;
  margin-top: 5%;
  overflow-y: auto;
  border-radius: 20px;
  background: rgba(255, 248, 236, 0.6); /* Negro con 40% de opacidad: ajusta aquí */
  margin-bottom: 4%;
}

.regresar{
  width: 120px;
  height: 25px;
  background: #a1360b;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 4%;
  background-color: #a1360b; /* Gray background rgb(161, 54, 11) */ 
  /*background: rgba(161, 54, 11, 1); /* Negro con 40% de opacidad: ajusta aquí */
  border-radius: 10px;
  text-align: center;
  color: white;
}

.section-chat{
    display: flex;
    margin-top: 25px;
}

.contenidoChat{
    display: inline-block;
    text-align: center;
    border-radius: 0px 30px 0px 30px;
    background: gray;
    color: white;
    /* Elimina cualquier width fijo para tamaño automático */
    width: auto;
    height: auto;
    max-width: 80vw; /* Opcional: limita el ancho máximo si el texto es muy largo */
    box-sizing: border-box;
    white-space: pre-line; /* Permite saltos de línea */
    padding: 10px;
}

.contenidoChatCliente{
    display: inline-block;
    text-align: center;
    border-radius: 30px 0px 30px 0px;
    background: #a1360b;
    color: white;
    /* Elimina cualquier width fijo para tamaño automático */
    width: auto;
    height: auto;
    max-width: 80vw; /* Opcional: limita el ancho máximo si el texto es muy largo */
    box-sizing: border-box;
    white-space: pre-line; /* Permite saltos de línea */   
    padding: 10px;
}

.textConversacion{
    display: flex;
    align-content: center;
    margin-bottom: 3%;
}

.icon {
  font-size: 20px;
}

input{
  border-color: #a1360b;
}
</style>