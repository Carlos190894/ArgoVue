<template>
  <div class="container">
    <div class="login">
      <div class="btn-regresar">
        <button type="submit" @click="goToBack">Regresar</button>
      </div>
      <img :src="logoSrc" alt="Logo" class="logo" />
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <h2>Selecciona un Estado</h2>
        </div>
        <div class="states-list">
          <div class="country-item" v-for="country in countries" :key="country.name">
            <img :src="flagSrc" :alt="country.name" class="flag" />
            <span class="country-name">{{ country.name }}</span>
            <label class="switch">
              <input type="checkbox" v-model="country.selected" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div class="btn-guardar">
          <button type="submit" @click="goToNext">Guardar</button>
        </div>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusquedaProducto',
  methods: {
    goToNext() {
        this.$router.push({ name: 'Busqueda' });
    },
    goToBack(){
        this.$router.push({ name: 'Busqueda' });
    }
  },
  data() {
    return {
      flagSrc: require('@/Images/planta.png'), // Usa @/assets para cargar la imagen correctamente
      logoSrc: require('@/Images/logo_color.png'),
      countries: [
        "Duranta", "Limon", "Romero", "Orquidea",
        "Pasto", "Delfa"
      ].map(name => ({
        name,
        selected: false,
      })),
    };
  },
};
</script>

<style scoped>
.container {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: #fff;
  overflow: hidden;
}

.login {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 400px;
  /* width: 100%; */
  height: 80vh;
  box-sizing: border-box;
  background: #fdf9f1;
  margin-top: 20%;
  overflow-y: auto;
  border-radius: 20px;
}

.states-list {
  width: 100%;
  height: 250px;         /* Fija la altura del div de listado */
  max-height: 250px;
  overflow-y: auto;      /* Scroll solo interno */
  margin-top: 10%;
  margin-bottom: 15px;
  padding-right: 8px;
  background: #fdf9f1;
  border: 1px solid #eee;
  border-radius: 8px;
}

.form-group {
  margin: 5% 0;
}

.country-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  background: #fdf9f1;
}

.country-item:last-child {
  border-bottom: none;
}

.flag {
  width: 30px;
  height: 20px;
  border-radius: 3px;
  margin-right: 10px;
  object-fit: cover;
}

.country-name {
  flex-grow: 1;
  text-align: left;
  font-size: 16px;
  margin-left: 8px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ff6200;
}

input:checked + .slider::before {
  transform: translateX(14px);
}

.logo {
  width: 70%; /* Ajusta el tamaño */
  /*margin: 20px auto 10px auto; /* Centra la imagen horizontalmente */
  display: block;
  max-width: 260px;
}

.btn-guardar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 8px;
}

.btn-regresar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

}
</style>