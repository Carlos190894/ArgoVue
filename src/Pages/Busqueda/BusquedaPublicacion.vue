
<template>
  <div class="app-container">
    <!-- Header -->
    <header class="app-header">
      <div>
        <button class="regresar"><i class="fa-solid fa-circle-left" style="margin-right: 15px;"></i>Regresar</button>
      </div>
      <div class="logo">
        
      </div>
      <div class="header-icons">
        <i class="fa-solid fa-house-chimney" style="color: #983608; font-size: 40px; margin-right: 0px;"></i>
      </div>
    </header>

    <!-- Main Content -->
    <main class="app-content">
        
      <!-- Publicidad -->
      <section class="section">
        <section class="section-fondo">
          <div class="titulos">
              <i class="fa-regular fa-circle-user icon" style="font-size: 30px;"></i>
              <label id="nombreVivero" style="font-weight: bold;" for="">Vivero Atlixco</label>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-share-nodes"></i>
              <div class="background-div"></div>
          </div>
          <div style="display: flex; gap: 15px; margin-top: 10px; margin-bottom: 10px;">
              <button class="btn-tarjeta">Vende</button>
              <button class="btn-tarjeta">Delfa</button>
          </div>
              <div class="background-div2"></div>
        </section>
      </section>
      <!-- Botones centrales -->
      <section class="section2">
        <button class="btn-1">Precio x Unidad</button>
        <button class="btn-1" style="margin-left: 30px;">Cantidad Ofertada</button>
        <div style="width: 100%;">
          <button class="btn-2">Propuesta de compra</button>
        </div>
      </section>
      <!-- Eventos -->
      <section class="section">
        <div class="descripcion">
          <label for="">
            Aqui tenemos una descripcion mas detalla del producto, como lo son el cuidado, el tiempo de la planta, 
            y demas datos que el agricultor se le solicitara agregar
          </label>
        </div>
      </section>

      <!-- Apartado de publicaciones -->
       <div style="text-align: center; font-size: 20px;">
        <label for="">Tambien te podria interesar</label>
       </div>
      <section class="section3" style="justify-content: center;">
        <section class="section-img">
          <div class="background-publicacion"></div>
        </section>
        <section class="section-img">
          <div class="background-publicacion"></div>
        </section>
        <section class="section-img">
          <div class="background-publicacion"></div>
        </section>
      </section>
    </main>

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
</template>

<script>
export default {
  name: "BusquedaPublicacion",
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
  margin-right: 40px;
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

/* .main-button{
  width: 30px;
  margin-right: 10px;
} */

.btn-header{
    margin-bottom: 5%;
    margin-left: 3%;
    width: 25%;
    height: 35px;
}

.btn-1{
  width: 40%;
  height: 5%;
  background: white;
  background-color: #983608;
}

.btn-2{
  width: 40%;
  height: 6%;
  margin-top: 15px;
  background: white;
  background-color: #983608;
}
.btn-tarjeta{
    width: 60px;
    height: 25px;
    background: white;
    background-color: #983608;
}

.regresar{
  width: 120px;
  height: 25px;
  background: white;
  background-color: #983608;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 4%;
  background-color: #fff1d0; /* Gray background */
  border-radius: 10px;
  text-align: center;
}

.section-fondo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 4%;
  background-color: white; /* Gray background */
  background: #983608;
  border-radius: 10px;
  text-align: center;
}
.section2{
  display: inline;
  /* flex-direction: column; */
  align-items: center;
  margin-bottom: 5%;
  padding: 4%;
  /*background-color: #fff1d0; /* Gray background */
  border-radius: 10px;
  text-align: center;
  /* color: white; */
}

.section3{
  display: flex;
  margin-bottom: 5%;
  padding: 4%;
  border-radius: 10px;
  text-align: center;
}

.section-img {
  width: 90px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 0%;
  background-color: #fff1d0; /* Gray background */
  border-radius: 20px;
  text-align: center;
  margin: 10px;
  border-color: #983608;
}

.titulos{
    color: white;
    display: flex; /* Hace que los elementos estén en la misma fila */
    align-items: center; /* Alinea los elementos verticalmente al centro */
    gap: 25px; /* Espaciado entre los elementos (opcional) */
    margin-bottom: 0px;
}

.background-div{
  width: 35px;
  height: 35px;
  background-image: url('../../Images/mexico.png'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: white; /* Cambia el color del texto si es necesario */
  text-align: center; /* Centra el texto horizontalmente */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
}

.background-div2{
  margin-top: 2%;
  margin-bottom: 2%;
    width: 90%;
    height: 160px;
  background-image: url('../../Images/lavanda.jpg'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  line-height: 150px; /* Centra el texto verticalmente */
  border-radius: 10px; /* Opcional: esquinas redondeadas */
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
}

.background-publicacion{
  width: 80px;
  height: 80px;
  margin: 10px;
  background-image: url('../../Images/lavanda.jpg'); /* URL de la imagen */
  background-size: cover; /* Ajusta la imagen para cubrir el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: white; /* Cambia el color del texto si es necesario */
  text-align: center; /* Centra el texto horizontalmente */
  border-radius: 20px; /* Opcional: esquinas redondeadas */ 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

.descripcion {
  width: 90%;
  margin-top: 2%;
  padding: 2%;
  background-color: #f8f9fa;
  color: #4a1500;
  border-radius: 10px; /* Opcional: esquinas redondeadas */
}

.dropdown-container {
  position: relative;
  display: inline-block;
}

.main-button {
  width: 30px;
  background-color: #4a1500;
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
  /* background-color: #ff6200; */
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 3px solid orange; /* Borde de 2px con color naranja */
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
  padding: 5px;
  background-color: #fff1d0;
  color: #4a1500;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; 
}

.submenu-item:hover {
  background-color: #eee;
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
</style>