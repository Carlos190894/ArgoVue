<template>
    <div class="login-container">
        <div class="app-container">
            <button class="close-btn" @click="goHome">×</button>
            <img src="../../Images/logo_color.png" alt="Logo" class="logo" />
            <h3 class="title">
            Conviértase en usuario premium<br>
            para acceder a todas las ventajas que ARGO ofrece.
            </h3>
            <p class="subtitle">Seleccione el plan que expanda sus horizontes</p>
            <div class="plans">
            <div class="plan-card" @click="selectPlan('mensual')">
                <div class="plan-details">
                <span class="plan-name">PLAN PREMIUM MENSUAL</span>
                <span class="plan-price">$380</span>
                </div>
                <i class="fa-solid fa-circle-right plan-arrow"></i>
            </div>
            <div class="plan-card annual" @click="selectPlan('anual')">
                <div class="annual-offer">¡Mejor oferta!</div>
                <div class="plan-details">
                <span class="plan-name">PLAN PREMIUM ANUAL</span>
                <span class="plan-price">$2,280</span>
                </div>
                <div class="plan-annual-desc">
                <span class="save">Ahorra <b>50%</b>.</span>
                </div>
                <i class="fa-solid fa-circle-right plan-arrow"></i>
            </div>
            </div>
            <div class="benefits-table">
            <div class="benefits-header">
                <span>Beneficios</span>
                <span>Básico</span>
                <span>Premium</span>
            </div>
            <div class="benefits-row" v-for="benefit in benefits" :key="benefit.text">
                <span>{{ benefit.text }}</span>
                <span class="basic">——</span>
                <span class="premium">
                <svg v-if="benefit.premium" width="23" height="23" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#2DC653"/>
                    <path d="M7 12.5l4 4 6-8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
            </div>
            </div>
        </div>
    </div>
</template>

<style>
@import "@/assets/css/fonts.css"; /* Importa el archivo CSS */
</style>

<script setup>

const benefits = [
  { text: 'Chat ilimitado', premium: true },
  { text: 'Datos de contacto', premium: true },
  { text: 'Correos electrónicos automatizados', premium: true },
  { text: 'Analisis de Tendencias', premium: true },
  { text: 'Clima', premium: true },
  { text: 'Dashboard Estrategico', premium: true },
  { text: 'Visualizaciones en Publicaciones', premium: true },
  { text: 'Analisis del Mercado', premium: true },
  { text: 'Tendencias', premium: true },
]

function selectPlan(plan) {
  // Aquí puedes emitir un evento o navegar a la compra
  alert('Seleccionaste el plan: ' + plan)
}
</script>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'ArgoPage'});
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 90vh;
  background: rgba(255, 248, 236, 0.8); /* Negro con 40% de opacidad: ajusta aquí */
  border-radius: 30px;
  padding: 24px 12px 32px 12px;
  font-family: 'Nunito Sans', sans-serif;
  position: relative;
  border: 0px solid #ddd; /* For preview purposes */
  overflow-y: auto;      /* Scroll solo interno */
}

.logo{
  width: 100%; /* Ajusta el tamaño */
  margin: 0 auto; /* Centra la imagen horizontalmente */
  display: block;
}

.close-btn {
  position: absolute;
  width: 70px;
  top: 20px;
  right: 24px;
  background: none;
  color: #222;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.subtitle {
  text-align: center;
  margin-bottom: 22px;
}

.plans {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.plan-card {
  background: #F9F9F9;
  border-radius: 18px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.2s;
  box-shadow: 0 4px 12px #0001;
}

.plan-card:hover {
  box-shadow: 0 8px 24px #0002;
}

.plan-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.plan-name {
  font-size: 1.04rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.plan-price {
  font-size: 1.7rem;
  font-weight: 700;
}

.plan-arrow {
   font-size: 2rem;
}

.annual {
  position: relative;
}

.annual-offer {
  position: absolute;
  top: -16px;
  right: 54px;
  background: #666;
  color: #fff;
  border-radius: 12px;
  padding: 2px 13px;
  font-size: 0.83rem;
  z-index: 1;
}

.plan-annual-desc {
  margin-top: 3px;
  font-size: 0.94rem;
  color: #444;
}
.plan-annual-desc .save {
  font-weight: 400;
  font-size: 0.9rem;
  margin-right: 5%;
}
.benefits-table {
  background: #F9F9F9;
  border-radius: 18px;
  margin-top: 24px;
  padding: 16px 0 10px 0;
  font-size: 1rem;
}

.benefits-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 6px;
  padding: 0 24px;
  color: #222;
}

.benefits-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 24px;
  border-top: 1px solid #eee;
}

.benefits-row span {
  min-width: 115px;
}

.basic {
  color: #888;
  text-align: center;
  font-size: 1.2rem;
}

.premium {
  text-align: center;
}

@media (max-width: 420px) {
  .app-container {
    padding: 12px 2px;
  }
  .benefits-header, .benefits-row {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>