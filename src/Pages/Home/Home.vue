<template>
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
        <i class="fa-solid fa-house" style="font-size: 30px;"></i>
      <!-- <i class="icon home" style="font-size: 30px;">🏠</i> -->
      <i class="icon search"  @click="goToNext">🔍</i>
      <i class="icon add">➕</i>
      <i class="icon chat">💬</i>
      <i class="icon settings">⚙️</i>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ArgoPage",
  methods: {
    goToNext() {
        this.$router.push({ name: 'Busqueda' });
      },
    },
};
</script>

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
  font-size: 22px;
  font-weight: bold;
}

.header-icons .icon {
  font-size: 25px;
  margin-left: 15px;
  cursor: pointer;
}

/* Main Content */
.app-content {
  flex: 1;
  padding: 10px;
  margin-top: 5%;
  overflow-y: auto;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 18%;
  background-color: #808080; /* Gray background */
  border-radius: 10px;
  text-align: center;
  color: white;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.dots {
  font-size: 20px;
}

/* Grid Section */
.grid-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.grid-item {
  padding: 20%;
  background-color: #808080; /* Gray background */
  border-radius: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 15px;
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