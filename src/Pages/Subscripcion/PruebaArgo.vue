<template>
  <div class="container">
    <div class="menu">
      <div class="menu-item" @click="ver">
        <span class="icon">
          <!-- Ojo (Ver) -->
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <ellipse cx="14" cy="14" rx="10" ry="6" stroke="#222" stroke-width="2"/>
            <circle cx="14" cy="14" r="2.5" fill="none" stroke="#222" stroke-width="2"/>
          </svg>
        </span>
        <span>Ver</span>
      </div>
      <div class="menu-item" @click="editar">
        <span class="icon">
          <!-- Lápiz (Editar) -->
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <rect x="7" y="20" width="14" height="2" fill="#222"/>
            <path d="M18 8l2 2-8 8-2 0 0-2 8-8z" fill="none" stroke="#222" stroke-width="2"/>
            <path d="M17 9l2 2" stroke="#222" stroke-width="2"/>
          </svg>
        </span>
        <span>Editar</span>
      </div>
      <div class="menu-item" @click="eliminar">
        <span class="icon">
          <!-- Basura (Eliminar) -->
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <rect x="8" y="12" width="12" height="9" rx="2" fill="none" stroke="#222" stroke-width="2"/>
            <rect x="11" y="8" width="6" height="2" fill="#222"/>
            <line x1="12" y1="15" x2="12" y2="19" stroke="#222" stroke-width="2"/>
            <line x1="16" y1="15" x2="16" y2="19" stroke="#222" stroke-width="2"/>
          </svg>
        </span>
        <span>Eliminar</span>
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

 <script>
  //import axios from "axios";
  
  export default {
    name: 'PruebaArgo',
    methods: {
    goToNext() {
        this.$router.push({ name: 'ArgoBusqueda' });
    },
    goToBack() {
        this.$router.push({ name: 'ArgoBusqueda' });
      },
    },
    data() {
      return {
        countries: [
          {
            name: "México",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
            selected: false,
          },
          {
            name: "Estados Unidos",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            selected: false,
          },
        ],
      };
    },
  };
  </script>

<script setup>
function ver() {
  alert('Ver');
}
function editar() {
  alert('Editar');
}
function eliminar() {
  alert('Eliminar');
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.menu {
  background: #eeedeb;
  border-radius: 20px;
  padding: 18px 25px 18px 10px;
  box-shadow: 0 0 2px #0002;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 120px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  font-size: 1.15rem;
  transition: background 0.12s;
  border-radius: 8px;
  padding: 3px 6px 3px 2px;
}

.menu-item:hover {
  background: #e0e0de;
}

.icon {
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 110px;
  height: 130px;
  background: #eeedeb;
  border: 2px solid #222;
  border-radius: 16px;
}
</style>