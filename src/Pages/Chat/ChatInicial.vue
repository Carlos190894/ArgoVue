<template>
  <div class="app-container">
    <header class="app-header">
      <div>
        <button class="regresar"><i class="fa-solid fa-circle-left" style="margin-right: 15px;"></i>Regresar</button>
      </div>
    </header>

    <main class="app-content">
      <h1 class="main-title">Chats</h1>
      <section>
        <h2 class="section-title">Prospectos</h2>
        <div class="prospectos-box">
          <span class="heart-icon">❤️</span>
          <span class="prospectos-count">+50</span>
        </div>
      </section>

      <section>
        <h2 class="section-title">Chats</h2>
        <div class="chat-item">
          <div class="avatar">
            <div class="avatar-img"></div>
            <span class="status-dot"></span>
          </div>
          <div class="chat-info">
            <span class="chat-title">Vivero Atlixco</span>
            <span class="chat-message">Blabla bla</span>
          </div>
        </div>
      </section>
    </main>

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
  name: "ChatInicial",
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #f8f9fa;
}

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

/* .container {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  padding: 24px 16px;
  box-sizing: border-box;
} */

.main-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.section-title {
  font-size: 1.3rem;
  margin-top: 12px;
  margin-bottom: 8px;
}

/* Main Content */
.app-content {
  flex: 1;
  padding: 10px;
  margin-top: 5%;
  overflow-y: auto;
}

.prospectos-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #eee;
  border-radius: 14px;
  justify-content: center;
  margin-bottom: 16px;
}

.heart-icon {
  font-size: 2rem;
  color: #888;
}

.prospectos-count {
  background: #d59d2b;
  color: #fff;
  border-radius: 16px;
  padding: 2px 14px;
  margin-top: 4px;
  font-weight: bold;
  font-size: 1rem;
}

.chat-item {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 16px;
  padding: 10px 12px;
  margin-bottom: 12px;
  max-width: 300px;
}

.avatar {
  position: relative;
  margin-right: 10px;
}

.avatar-img {
  width: 36px;
  height: 36px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  display: inline-block;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #d59d2b;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 0;
  border: 2px solid #fff;
}

.chat-info {
  display: flex;
  flex-direction: column;
}

.chat-title {
  font-weight: bold;
  font-size: 1rem;
}

.chat-message {
  font-size: 0.85rem;
  color: #444;
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

.regresar{
  width: 120px;
  height: 25px;
  background: #a1360b;
}
</style>