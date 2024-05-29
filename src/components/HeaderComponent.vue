<template>
  <v-app-bar app :class="{ 'scrolled': isScrolled }" flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
    <v-toolbar-title class="header-title fade-in">
      <transition name="fade">
        <v-img v-if="showNavImage" src="@/assets/profile.jpeg" alt="Michaël Redant" class="nav-profile-img" ref="navImage"></v-img>
      </transition>
      {{ name }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/') }" to="/">Home</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/about') }" to="/about">Over Michaël</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/education') }" to="/education">Opleidingen</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/skills') }" to="/skills">Skills</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/experience') }" to="/experience">Ervaring</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/engagement') }" to="/engagement">Sociaal Engagement</v-btn>
    <v-btn text class="header-btn d-none d-lg-flex" :class="{ active: isActive('/contact') }" to="/contact">Contact</v-btn>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      absolute
      class="d-lg-none"
    >
      <v-list>
        <v-list-item @click="navigateTo('/')">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/about')">
          <v-list-item-title>Over Michaël</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/education')">
          <v-list-item-title>Opleidingen</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/skills')">
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/experience')">
          <v-list-item-title>Ervaring</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/engagement')">
          <v-list-item-title>Sociaal Engagement</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/contact')">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      name: 'Michaël Redant',
      showNavImage: false,
      isScrolled: false,
      drawer: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    isActive(route) {
      return this.$route.path === route;
    },
    navigateTo(route) {
      this.drawer = false;
      this.$router.push(route);
    }
  },
  watch: {
    $route(to) {
      this.showNavImage = !(to.path === '/' || to.path === '/about');
    }
  },
  mounted() {
    this.showNavImage = !(this.$route.path === '/' || this.$route.path === '/about');
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.header-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
}

.nav-profile-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.header-btn {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
}

.header-btn:hover,
.header-btn.active {
  background-color: #42a5f5; /* Blauw hover en active kleur */
  color: #fff;
}

.fade-in {
  animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.v-app-bar {
  background-color: rgba(255, 255, 255, 0) !important;
  box-shadow: none;
  transition: background-color 0.3s ease;
}

.v-app-bar.scrolled {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.v-navigation-drawer {
  z-index: 2000; /* Zorg ervoor dat de navigatie op de voorgrond staat */
  background-color: white; /* Instellen van een achtergrondkleur */
}

.v-navigation-drawer .v-list-item {
  cursor: pointer;
}

@media (max-width: 1072px) {
  .d-lg-none {
    display: flex !important;
  }
  .d-none.d-lg-flex {
    display: none !important;
  }
}
</style>
