<template>
  <v-app-bar app :class="{ 'scrolled': isScrolled }">
    <v-toolbar-title class="header-title fade-in">
      <transition name="fade">
        <v-img v-if="showNavImage" src="@/assets/profile.jpeg" alt="Michaël Redant" class="nav-profile-img" ref="navImage"></v-img>
      </transition>
      {{ name }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="header-btn" :class="{ active: isActive('/') }" to="/">Home</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/about') }" to="/about">About</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/education') }" to="/education">Education</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/skills') }" to="/skills">Skills</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/experience') }" to="/experience">Experience</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/portfolio') }" to="/portfolio">Portfolio</v-btn>
    <v-btn text class="header-btn" :class="{ active: isActive('/contact') }" to="/contact">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      name: 'Michaël Redant',
      showNavImage: false,
      isScrolled: false
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    isActive(route) {
      return this.$route.path === route;
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
  font-family: 'Roboto', sans-serif;
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
</style>
