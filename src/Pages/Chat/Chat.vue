
<template>
  <div class="login-container">
    <div class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div>
          <button class="regresar"><i class="fa-solid fa-circle-left" style="margin-right: 15px;"></i>Regresar</button>
        </div>
        <!-- <div class="logo">
          
        </div>-->
        <div class="header-icons">
          <i class="fa-solid fa-bars"></i>
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
              <i class="fa-regular fa-circle-user icon" style="font-size: 35px;"></i>
              <div class="contenidoChat" style="width: 80%; margin-left: 25px;">
                  <label for="" class="chat1">Vivero atlixco</label><br>
                  <label for="" class="chat1">Pregunta para informacion ?</label>
              </div>
          </section>

          <section class="section-chat">
              <div class="contenidoChatCliente" style="width: 80%; margin-right: 25px;">
                  <label for="" class="chat1">Section para responder la preguntar y continuar con el chat</label>
              </div>
              <i class="fa-regular fa-circle-user icon" style="font-size: 35px;"></i>
          </section>
      </main>
      <div class="textConversacion">
        <div>
          <i class="fa-solid fa-camera" style="font-size: 35px;"></i>
        </div>
        <div>
          <input type="text" label="Aa" style="width: 260px; height: 30px; margin-left: 15px; margin-right: 15px;">
        </div>
        <div>
          <i class="fa-solid fa-gauge-high" style="font-size: 35px; margin-bottom: 5px;"></i>
        </div>
      </div>
      <!-- Footer Navigation -->
      <footer class="app-footer">
          <i class="fa-solid fa-house icon" @click="goToHome"></i>
        <!-- <i class="icon home" style="font-size: 30px;">🏠</i> -->
        <i class="icon search" style="font-size: 30px;">🔍</i>
        <i class="icon add">➕</i>
        <i class="icon chat">💬</i>
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
      isMenuOpen: false,
      selectedIndex: null,
      menuItems: [
        {
          label: "País",
          subMenu: ["Todos", "Selecciona un país"],
        },
        {
          label: "Estado",
          subMenu: ["Todos", "Selecciona un estado"],
        },
        {
          label: "Producto",
          subMenu: ["Todos", "Selecciona un producto", "Mis Productos"],
        },  
      ],
    };
  },
  methods: {
    goToHome() {  
      this.$router.push({ name: 'Home' });
    },
    goToPais(){
      this.$router.push({ name: 'BusquedaPais'});
    },
    goToEstado(){
      this.$router.push({ name : 'BusquedaEstado'});
    },
    goToProducto(){
      this.$router.push({ name : 'BusquedaProducto'});
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.selectedIndex = null; // Cierra cualquier submenú abierto
    },
    selectItem(index) {
      if (this.selectedIndex === index) {
        this.selectedIndex = null; // Cierra el submenú si ya está abierto
      } else {
        this.selectedIndex = index; // Abre el submenú seleccionado
      }
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


/* Container */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 375px; /* iPhone width */
  margin: 0 auto;
  border: 0px solid #ddd; /* For preview purposes */
  background-color: white;
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

/* Main Content */
.app-content {
  flex: 1;
  padding: 10px;
  margin-top: 5%;
  overflow-y: auto;
}

.btn-header{
    margin-bottom: 5%;
    margin-left: 3%;
    width: 25%;
    height: 35px;
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
  background-color: #a1360b; /* Gray background */
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
}

.textConversacion{
    display: flex;
    align-content: center;
}

.icon {
  font-size: 20px;
}

/* Footer */
.app-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #fff;
}

.app-footer .icon {
  font-size: 25px;
  cursor: pointer;
}

input{
  border-color: #a1360b;
}
</style>