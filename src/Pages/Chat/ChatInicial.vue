<template>
  <div class="container">
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
.container {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  padding: 24px 16px;
  box-sizing: border-box;
}

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
</style>