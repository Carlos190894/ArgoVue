<template>
  <div class="profile-container">    
    <!-- Hamburger Menu Icon -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Side Menu Overlay -->
    <div v-if="menuOpen" class="menu-overlay" @click.self="toggleMenu">
      <div class="side-menu">
        <b>Ayuda</b>
        <ul>
          <li>
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png" alt="contacto" />
            <span>Contacto</span>
            <span class="arrow">➔</span>
          </li>
          <li>
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="verificar cuenta" />
            <span>Verificar cuenta</span>
            <span class="arrow">➔</span>
          </li>
          <li>
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="términos" />
            <span>Términos y condiciones</span>
            <span class="arrow">➔</span>
          </li>
          <li>
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="privacidad" />
            <span>Política de privacidad</span>
            <span class="arrow">➔</span>
          </li>
          <li>
            <span class="no-icon"></span>
            <span>Sobre ARGO</span>
            <span class="arrow">➔</span>
          </li>
          <li>
            <span class="no-icon"></span>
            <span>Sobre GLSOFT</span>
            <span class="arrow">➔</span>
          </li>
        </ul>
        <button class="logout-btn">cerrar sesion</button>
      </div>
    </div>

    <!-- Profile Picture and Name -->
    <div class="profile-info">
      <div class="profile-pic-wrapper">
        <div class="profile-pic"></div>
        <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt="verified" class="verified-badge" />
      </div>
      <div class="profile-name">Andrea González</div>
      <div class="profile-desc">Vivero Atlixco</div>
    </div>
    
    <!-- Followers & Following -->
    <div class="followers-row">
      <div>
        <div class="followers-count">10</div>
        <div class="followers-label">Seguidores</div>
      </div>
      <div>
        <div class="followers-count">10</div>
        <div class="followers-label">Siguiendo</div>
      </div>
    </div>
    
    <!-- Menu Tabs -->
     <!-- Menu Tabs -->
    <div class="menu-tabs">
      <button 
        class="tab" 
        :class="{ active: selectedTab === 'publicaciones' }"
        @click="selectedTab = 'publicaciones'"
      >publicaciones</button>
      <span 
        :class="{ 'selected-span': selectedTab === 'perfil' }"
        @click="selectedTab = 'perfil'"
      >Perfil</span>
      <span
        :class="{ 'selected-span': selectedTab === 'evaluaciones' }"
        @click="selectedTab = 'evaluaciones'"
      >Evaluaciones</span>
      <span
        :class="{ 'selected-span': selectedTab === 'intereses' }"
        @click="selectedTab = 'intereses'"
      >Intereses</span>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-if="selectedTab === 'publicaciones'">        
        <div class="pubs-section-tabs">
          <button
            class="pubs-section-tab"
            :class="{ active: selectedPublTab === 'ventas' }"
            @click="selectedPublTab = 'ventas'"
          >Ventas</button>
          <span
            class="pubs-section-label"
            :class="{ active: selectedPublTab === 'compras' }"
            @click="selectedPublTab = 'compras'"
          >Compras</span>
        </div>
        <div class="products-grid">
          <div
            v-for="(card, i) in 3"
            :key="i"
            class="product-card"
            :class="{ selected: selectedPublTab === 'compras' && i === 1 }"
          ></div>
        </div>
      </div>
      <div v-else-if="selectedTab === 'perfil'">
        <button class="btn-perfil">Editar Perfil</button>
        <div class="perfilTab">
            <label class="lb-perfil">Contacto</label><span class="inp-perfil">735-353-87-90</span>
            <label class="lb-perfil">Email</label><span class="inp-perfil">andy@gmail.com</span>
            <label class="lb-perfil">Giro</label><span class="inp-perfil">Productor</span>
            <label class="lb-perfil">Pais</label><span class="inp-perfil">Mexico</span>
            <label class="lb-perfil">Estado</label><span class="inp-perfil">Morelos</span>
            <label class="lb-perfil">Suscripción</label><button class="inp-perfil">Adquirir suscripción</button>
            </div>
      </div>
      <div v-else-if="selectedTab === 'evaluaciones'">
        <div class="evaluaciones-title">
            ¿Qué se comenta sobre Vivero Atlixco?
        </div>
        <div class="evaluaciones">
            <div class="evaluacion-card">
                <div class="eval-comentario">
                    “Excelenge comunicación, todos sus productos son de calidad de exportación”
                </div>
                <div class="eval-score">
                    CALIFICACION: <span>10</span>
                </div>
                <div class="eval-footer">
                    <span class="eval-user">
                        Vivero Palma
                        <img class="flag" src="https://flagcdn.com/mx.svg" alt="MX" />
                    </span>
                    <span class="eval-time">Hace 2 semanas</span>
                </div>
            </div>
        </div>
      </div>
      <div v-else-if="selectedTab === 'intereses'">
        <div class="intereses">
        <div class="interes-titulo">Compra</div>
        <div class="intereses-grid">
            <div class="interes-item">
            <img src="../../Images/lavanda.jpg" alt="Bougainvillea" />
            </div>
            <div class="interes-item">
            <img src="../../Images/tulipan.jpg" alt="Sunflower" />
            </div>
            <div class="interes-item">
            <img src="../../Images/promo.jpg" alt="Orange Flower" />
            </div>
        </div>
        <div class="interes-titulo">Venta</div>
        <div class="intereses-grid">
            <div class="interes-item empty"></div>
            <div class="interes-item empty"></div>
            <div class="interes-item empty"></div>
        </div>
        </div>
      </div>
    </div>
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

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() { menuOpen.value = !menuOpen.value }

const selectedTab = ref('publicaciones')
const selectedPublTab = ref('ventas')
</script>

<style scoped>
/* ...estilos anteriores... */
.profile-container {
  max-width: 375px;
  margin: 0 auto;
  background: #fff;
  height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
  position: relative;
  padding: 0 0 20px 0;
}
.inicio-btn {
  padding: 7px 27px;
  background: #888;
  border-radius: 15px;
  color: #fff;
  border: none;
  font-size: 16px;
}
.hamburger {
  position: fixed;
  left: 24px;
  top: 77px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 21;
}
.hamburger span {
  display: block;
  width: 30px;
  height: 4px;
  background: #111;
  border-radius: 2px;
}
.menu-overlay {
  position: fixed;
  top: 40px; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.05);
  z-index: 20;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.side-menu {
  margin: 60px 0 0 18px;
  background: #ededeb;
  border-radius: 18px;
  padding: 16px 0 16px 0;
  width: 85vw;
  max-width: 260px;
  min-width: 230px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.side-menu b {
  font-size: 18px;
  margin-left: 18px;
  margin-bottom: 6px;
}
.side-menu ul {
  list-style: none;
  padding: 0 0 0 0;
  margin: 3px 0 0 0;
}
.side-menu li {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 16px;
  padding: 6px 18px 6px 18px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.12s;
}
.side-menu li:hover {
  background: #d32b3a;
}
.side-menu .icon {
  width: 22px;
  height: 22px;
  margin-right: 3px;
}
.side-menu .arrow {
  margin-left: auto;
  font-size: 19px;
}
.side-menu .no-icon {
  width: 22px;
  height: 22px;
}
.logout-btn {
  margin: 17px 20px 0 20px;
  padding: 9px 0;
  background: #d32b3a;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.16s;
}
.logout-btn:hover {
  background: #a61a24;
}
/* ...resto de estilos previos (profile-info, followers-row, etc)... */
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.profile-pic-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}
.profile-pic {
  width: 200px;
  height: 200px;
  background: #000;
  border-radius: 50%;
  border: 2px solid gray;
  background-image: url('@/Images/perfil.jpg');
  background-size: cover;        /* Para que la imagen cubra todo el div */
  background-position: center;   /* Para centrar la imagen */
  background-repeat: no-repeat;  /* Para que la imagen no se repita */
}
.verified-badge {
  position: absolute;
  bottom: 10px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #fff;
}
.profile-name {
  margin-top: 25px;
  font-size: 20px;
  font-weight: 500;
}
.profile-desc {
  font-size: 15px;
  color: #444;
  margin-top: 20px;
  margin-bottom: 12px;
}
.followers-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 10px 0 0 0;
}
.followers-count {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
.followers-label {
  text-align: center;
  font-size: 15px;
}
.menu-tabs {
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 40px;
  margin-bottom: 15px;
}
.menu-tabs .tab {
  background: #888;
  color: #fff;
  border-radius: 12px;
  padding: 3px 14px;
  border: none;
  font-weight: 500;
}
.menu-tabs .tab.active {
  background: #888;
}
.menu-tabs span {
  color: #444;
  font-size: 14px;
  padding: 3px 10px;
}

.menu-tabs .selected-span {
  text-decoration: underline;
  color: #333;
  cursor: pointer;
}
/* Opcional: estilo para el contenido de cada tab */
.tab-content {
  min-height: 80px;
  padding: 12px 20px;
  background: #f9f9f9;
  margin: 0 18px 14px 18px;
  border-radius: 10px;
  font-size: 15px;
  color: #222;
}

.section-tabs {
  display: flex;
  gap: 14px;
  margin-left: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
}
.section-tab {
  background: #888;
  color: #fff;
  border-radius: 14px;
  padding: 6px 18px;
  border: none;
  font-weight: 500;
  font-size: 17px;
}
.section-tab.active {
  background: #888;
}
.section-tabs span {
  font-size: 17px;
  color: #222;
}
.products-grid {
  display: flex;
  justify-content: space-between;
  margin: 0 18px;
  margin-top: 60px;
} 
.product-card {
  width: 92px;
  height: 150px;
  background: #f2f2f2;
  border-radius: 13px;
}
.product-card.selected {
  border: 2px solid #111;
  background: #fff;
}

.perfilTab {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  row-gap: 14px;
  column-gap: 14px;
  padding: 18px 18px 14px 18px;
  background: #f6f6f3;
  border-radius: 14px;
  margin-top: 10px;
}
.lb-perfil {
  align-self: center;
  justify-self: end;
  font-size: 15px;
  color: #222;
  background: #e5e4e1;
  border-radius: 16px;
  padding: 5px 15px;
  min-width: 90px;
  text-align: right;
  font-weight: 400;
}
.inp-perfil {
  align-self: center;
  justify-self: start;
  font-size: 15px;
  color: #222;
  background: #e5e4e1;
  border-radius: 16px;
  border: none;
  padding: 5px 15px;
  min-width: 120px;
  font-weight: 400;
  outline: none;
}
.perfilTab .inp-perfil[type="text"] {
  /* Opcional: si quieres que el input parezca texto plano */
  pointer-events: none;
  background: #e5e4e1;
}
.btn-perfil {
  display: block;
  margin: 0 auto 18px auto;
  background: #e18f13;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  font-size: 18px;
  padding: 7px 0;
  width: 85%;
  cursor: pointer;
  transition: background 0.18s;
}
.perfilTab .inp-perfil[type="button"], 
.perfilTab .inp-perfil[type="submit"], 
.perfilTab button.inp-perfil {
  background: #e18f13;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 18px;
  padding: 7px 0;
  min-width: 100px;
  cursor: pointer;
}

/* Tabs de publicaciones: ventas/compras */
.pubs-section-tabs {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 28px;
  margin-bottom: 17px;
}
.pubs-section-tab, .pubs-section-label {
  font-size: 22px;
  border: none;
  background: none;
  font-weight: 500;
  cursor: pointer;
  color: #222;
  transition: background 0.17s, color 0.13s;
  border-radius: 18px;
  padding: 7px 24px;
}
.pubs-section-tab.active, .pubs-section-label.active {
  background: #888;
  color: #fff;
}
.pubs-section-tab {
  margin-right: 5px;
}

/* Products grid */
.products-grid {
  display: flex;
  justify-content: space-between;
  margin: 0 18px;
  margin-top: 5px;
}
.product-card {
  width: 92px;
  height: 110px;
  background: #f2f2f2;
  border-radius: 13px;
}
.product-card.selected {
  border: 2px solid #111;
  background: #fff;
}

/*APARTADO PARA LAS EVALUACIONES */
.evaluaciones-title {
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0 18px 0;
  text-align: center;
}
.evaluaciones {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.evaluacion-card {
  background: #efefed;
  border-radius: 18px;
  padding: 20px 18px 13px 18px;
  margin-bottom: 15px;
  width: 97%;
  max-width: 340px;
  box-sizing: border-box;
  box-shadow: 0 1px 7px rgba(0,0,0,0.03);
}
.eval-comentario {
  font-size: 15px;
  text-align: center;
  font-style: italic;
  margin-bottom: 12px;
  color: #222;
}
.eval-score {
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 13px;
  letter-spacing: 0.5px;
}
.eval-score span {
  font-weight: bold;
  color: #464646;
}
.eval-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
}
.eval-user {
  font-size: 17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}
.flag {
  width: 25px;
  height: 17px;
  border-radius: 3px;
  margin-left: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.07);
  object-fit: cover;
  border: 1px solid #ccc;
}
.eval-time {
  font-size: 13px;
  color: #666;
  font-weight: 400;
}

/*APARTADO PARA GENERAR LOS INTERESES DEL USUARIO*/

.intereses {
  padding: 0 18px 0 18px;
  margin-top: 12px;
}
.interes-titulo {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0 11px 0;
}
.intereses-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.interes-item {
  width: 100px;
  height: 90px;
  background: #f5f5f3;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.interes-item img {
  max-width: 95%;
  max-height: 85%;
  border-radius: 12px;
  object-fit: cover;
}
.interes-item.empty {
  background: #ecebe9;
}

/* Footer */
.app-footer {
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;      /* Opcional, para que ocupe todo el ancho */
  /* Otros estilos opcionales */
  background: #fff;
  border-top: 1px solid #ccc;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
  padding: 16px;
}

.app-footer .icon {
  font-size: 25px;
  cursor: pointer;
}
</style>