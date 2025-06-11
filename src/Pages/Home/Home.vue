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
          <i class="fas fa-user icon" @click="goPerfil"></i>
        </div>
      </header>

      <!-- Main Content -->
      <main class="app-content">
        <!-- Consejos -->
        <section class="section consejos">
          <div class="section-title">Consejos</div>
          <div class="dots">● ● ●</div>
        </section>

        <!-- Publicidad -->
        <section class="section publicidad">
          <div class="section-title">Publicidad</div>
          <div class="dots">● ● ●</div>
        </section>

        <!-- Tendencias, Compras, Clima -->
        <div class="grid-section">
          <div class="grid-item">Tendencia de precios</div>
          <div class="grid-item">Compra ventas del día</div>
          <div class="grid-item">Clima</div>
        </div>

        <!-- Eventos -->
        <section class="section eventos">
          <div class="section-title">Eventos</div>
        </section>
      </main>

      <!-- Footer Navigation -->
      <footer class="app-footer">
          <i class="fa-solid fa-house" style="font-size: 35px; color: #461404;"></i>
        <i class="icon search"  @click="goSearch">🔍</i>
        <i class="icon add">➕</i>
        <i class="icon chat" @click="goChat">💬</i>
        <i class="icon settings">⚙️</i>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArgoPage",
  methods: {
    goSearch() {
        this.$router.push({ name: 'ArgoBusqueda' });
      },
    goChat() {
      this.$router.push({ name: 'ChatInicial'});
    },
    goPerfil() {
      this.$router.push({ name: 'PerfilUsuario'})
    },
  },
};
</script>
<style>
  @import "@/assets/css/header.css";
  @import "@/assets/css/fonts.css"; 
  @import "@/assets/css/home.css";
</style>
<style>
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

/* Main Content */
.app-content {
  flex: 1;
  padding: 10px;
  margin-top: 5%;
  overflow-y: auto;
}
</style>