<template>
  <v-container class="home-container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <transition name="slide-fade">
          <v-img v-if="showProfileImage" src="@/assets/profile.jpeg" alt="Michaël Redant" class="home-profile-img" ref="profileImage"></v-img>
        </transition>
        <h1 class="home-title">Michaël Redant</h1>
        <h2 class="home-subtitle">Marketeer, (Web)designer & Allround geek</h2>
        <p class="home-description">
          Ik ben op zoek naar een uitdaging in marketing. Ik ben een toegewijde marketeer en webdesigner. Mijn passie ligt in digitale contentcreatie en ik ben voortdurend gefascineerd door de ontwikkelingen in technologie en marketing binnen het digitale tijdperk.
        </p>
        <v-btn color="primary" class="home-btn" @click="navigateTo('about')">Meer over mij</v-btn>
      </v-col>
    </v-row>
    <v-row class="skills-row" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="skills-title">Vaardigheden</h2>
        <v-chip-group class="skills-chip-group" column>
          <v-chip class="skill-chip" v-for="skill in marketingSkills" :key="skill">{{ skill }}</v-chip>
        </v-chip-group>
        <v-btn text color="primary" class="link-to-skills" @click="navigateTo('skills')">Meer vaardigheden</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="home-card">
          <v-card-title>Sociaal Engagement</v-card-title>
          <v-card-text>
            <p>Lees meer over mijn betrokkenheid bij verschillende organisaties en mijn rol daarin.</p>
            <v-btn color="primary" class="home-btn" @click="navigateTo('engagement')">Sociaal Engagement</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="contact-row">
      <v-col cols="12" md="6">
        <v-card class="home-card contact-card">
          <v-card-title>Contact</v-card-title>
          <v-card-text>
            <p>Neem contact met mij op voor een interessante job aanbieding!</p>
            <v-btn color="primary" class="home-btn" @click="navigateTo('contact')">Contacteer mij</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showProfileImage: true,
      marketingSkills: ['Online Marketing', 'Content Creation', 'Social Media', 'SEO', 'Google Analytics', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Brand Strategy']
    };
  },
  methods: {
    navigateTo(page) {
      setTimeout(() => {
        this.$router.push({ path: `/${page}` });
      }, 300);
    }
  }
}
</script>

<style scoped>
.headline {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
}
.home-container {
  margin-top: 20px;
  animation: fadeIn 1s ease-in;
}

.home-profile-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  animation: bounceIn 1s ease;
}

.home-title {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  animation: slideInFromLeft 1s ease;
}

.home-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  animation: slideInFromRight 1s ease;
}

.home-description {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease;
}

.home-btn {
  margin-top: 10px;
  animation: bounceIn 1s ease;
}

.skills-row {
  margin-top: 40px;
  margin-bottom: 40px;
}

.skills-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease;
}

.skills-chip-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.skill-chip {
  font-size: 16px;
  margin: 5px;
  animation: fadeIn 2s ease;
}

.link-to-skills {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.home-card {
  padding: 20px;
  margin-bottom: 20px;
  animation: fadeIn 2s ease;
}

.contact-row {
  margin-top: 40px;
}

.contact-card {
  text-align: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounceIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
