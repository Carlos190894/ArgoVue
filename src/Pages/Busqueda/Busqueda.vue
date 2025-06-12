<template>
  <div class="login-container">
    <div class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div class="logo">ARGO</div>
        <!-- <div class="header-icons">
          <i class="icon bell">🔔</i>
          <i class="icon user">👤</i>
        </div> -->
        <div class="header-icons">
          <i class="fas fa-bell icon"></i>
          <i class="fas fa-user icon"></i>
        </div>
      </header>

      <!-- Main Content -->
      <main class="app-content">
        <div style="display: flex;">
          <div class="dropdown-container">
            <!-- Botón principal -->
            <button class="main-button" @click="toggleMenu">
              <span class="icon">≡</span>
            </button>

            <!-- Menú desplegable -->
            <div v-if="isMenuOpen" class="dropdown-menu">
              <div
                v-for="(item, index) in menuItems"
                :key="index"
                class="menu-item"
                @click="selectItem(index)"
              >
                <span>{{ item.label }}</span>
                <span class="arrow">›</span>
              </div>

              <!-- Opciones de submenú generadas afuera -->
              <div v-if="selectedIndex !== null" class="submenu-container">
                <div
                  v-for="(subItem, subIndex) in menuItems[selectedIndex].subMenu"
                  :key="subIndex"
                  class="submenu-item"
                >
                  <button
                    v-if="subItem === 'Selecciona un país'"
                    @click="goToPais"
                    class="submenu-button"
                  >
                    {{ subItem }}
                  </button>
                  <button
                    v-else-if="subItem === 'Selecciona un estado'"
                    @click="goToEstado"
                    class="submenu-button"
                  >
                    {{ subItem }}
                  </button>
                  <button
                    v-else-if="subItem === 'Selecciona un producto'"
                    @click="goToProducto"
                    class="submenu-button"
                  >
                    {{ subItem }}
                  </button>
                  <button
                    v-else-if="subItem === 'Todos'"
                    @click="goToProducto"
                    class="submenu-button"
                  >
                    {{ subItem }}
                  </button>
                  <button
                    v-else-if="subItem === 'Mis Productos'"
                    @click="goToProducto"
                    class="submenu-button"
                  >
                    {{ subItem }}
                  </button>
                  <span v-else>{{ subItem }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <button class="btn-header" style="width: 10%;"><i class="fa-solid fa-list"></i></button> -->
          <button class="btn-header">Comprar</button>
          <button class="btn-header">Vender</button>
        </div>

        <!-- Publicidad -->
        <section class="section" @click="goPublicacion">
          <div class="general">
            <div class="titulos">
              <i class="fa-regular fa-circle-user icon" style="font-size: 30px;"></i>
              <label id="nombreVivero" style="font-weight: bold;" for="">Vivero Atlixco</label>
              <div class="background-div"></div>
            </div>
            <div class="elemento-2">
                <button class="btn-tarjeta">Vende</button>
                <button class="btn-tarjeta">Delfa</button>
            </div>
                <div class="background-div2"></div>
            <div class="descripcion">
              <label for="">
                Descripcion del producto que se esta mostrando en la imagen, despues se completara con informacion 
              </label>
            </div>
          </div>
        </section>

        <!-- Eventos -->
        <section class="section" @click="goPublicacion">
          <div class="general">
            <div class="titulos">
              <i class="fa-regular fa-circle-user icon" style="font-size: 30px;"></i>
              <label id="nombreVivero" style="font-weight: bold;" for="">Vivero Atlixco</label>
              <div class="background-div"></div>
            </div>
            <div class="elemento-2">
                <button class="btn-tarjeta">Vende</button>
                <button class="btn-tarjeta">Lavanda</button>
            </div>
                <div class="background-div3"></div>
            <div class="descripcion">
              <label for="">
                Descripcion del producto que se esta mostrando en la imagen, despues se completara con informacion
              </label>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer Navigation -->
      <footer class="app-footer">
          <i class="fa-solid fa-house icon" @click="goToHome"></i>
        <!-- <i class="icon home" style="font-size: 30px;">🏠</i> -->
        <i class="icon search" style="font-size: 35px;">🔍</i>
        <i class="icon add">➕</i>
        <i class="icon chat" @click="goChat">💬</i>
        <i class="icon settings">⚙️</i>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArgoBusqueda",
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
      this.$router.push({ name: 'ArgoPage' });
    },
    goChat(){
      this.$router.push({name: 'ChatInicial'})
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
    goPublicacion(){
      this.$router.push({ name : 'BusquedaPublicacion'});
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
  @import "@/assets/css/header.css"; /* Importa el archivo CSS */
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
  color: white;
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

.btn-tarjeta{
    width: 90px;
    height: 25px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 4%;
  background: rgba(255, 248, 236, 0.8); /* Negro con 40% de opacidad: ajusta aquí */
  border-radius: 10px;
  text-align: center;
  color: white;
}

.general {
  border: 1px solid #4a1500; /* Borde de 2px con color naranja */
  border-radius: 20px;
  align-items: center; /* Alinea los elementos verticalmente al centro */
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 4%;
}

.titulos{
    color: #4a1500;
    display: flex; /* Hace que los elementos estén en la misma fila */
    align-items: center; /* Alinea los elementos verticalmente al centro */
    gap: 60px; /* Espaciado entre los elementos (opcional) */
}

.elemento-2{
  display: flex; 
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4%;
  align-items: center; /* Alinea los elementos verticalmente al centro */
  justify-content: center;
  text-align: center;
}

.background-div{
  width: 35px;
  height: 35px;
  background-image: url('../../Images/mexico.png'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: white; /* Cambia el color del texto si es necesario */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
  align-items: center; /* Alinea los elementos verticalmente al centro */
  justify-content: center;
  text-align: center;
  padding: 4%;
}

.background-div2{
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 4%;
  width: 90%;
  height: 160px;
  background-image: url('../../Images/lavanda.jpg'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
  margin-left: 4%;
}
 
.background-div3{
  margin-top: 2%;
  margin-bottom: 2%;
    width: 90%;
    height: 160px;
  background-image: url('../../Images/tulipan.jpg'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
  margin-left: 4%;
}

.descripcion {
  width: 90%;
  margin-top: 2%;
  padding: 2%;
  background: rgba(255, 248, 236, 0.8); /* Negro con 40% de opacidad: ajusta aquí */
  color: #4a1500;
  border-radius: 10px; /* Opcional: esquinas redondeadas */
  font-weight: bold;
  font-size: 13px;
  margin-left: 4%;
}

.dropdown-container {
  position: relative;
  display: inline-block;
}

/*Boton de la lista desplegable**/
.main-button {
  width: 40px;
  background-color: #a1360b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
  font-size: 15px;
}

.icon {
  font-size: 20px;
}

.dropdown-container {
  position: relative;
  display: inline-block;
}

.main-button {
  background-color: none;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
}

.icon {
  font-size: 20px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 200px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 3px solid #4a1500; /* Borde de 2px con color naranja */
  font-weight: bold;
  color: #4a1500;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 5px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #ddd;
}

.arrow {
  font-size: 16px;
}

.submenu-container {
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.submenu-item {
  margin-top: 2px;
  padding: 2px;
  background-color: transparent;
  color: #4a1500;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer; 
}

.submenu-button {
  width: 100%;
  padding: 10px;
  border: 3px solid #4a1500; /* Borde de 2px con color naranja */
}
.submenu-item:hover {
  background-color: #eee;
}

</style>