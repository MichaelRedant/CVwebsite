<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="contact-title">Contacteer mij</h1>
        <div class="contact-info">
          <p>Email: <a :href="mailtoLink">michael@xinudesign.be</a></p>
          <p>Telefoon: <a :href="telLink">+32 0496.90.85.03</a></p>
          <div class="social-icons">
            <a v-for="icon in socialIcons" :key="icon.link" :href="icon.link" target="_blank">
              <v-icon>{{ icon.name }}</v-icon>
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      mailtoLink: 'mailto:michael@xinudesign.be',
      telLink: 'tel:+320496908503',
      socialIcons: [
        { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/michael-redant' },
        { name: 'mdi-instagram', link: 'https://www.instagram.com/m_redant/' },
        { name: 'mdi-facebook', link: 'https://www.facebook.com/mredant1' }
      ]
    };
  }
}
</script>

<style scoped>
.contact-container {
  margin-top: 20px;
}

.contact-title {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.contact-info {
  text-align: center;
}

.contact-info p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin: 5px 0;
}

.contact-info a {
  text-decoration: none;
  color: #42a5f5;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-icons a {
  font-size: 24px;
  margin: 0 10px;
  color: #42a5f5;
}

.social-icons a:hover {
  color: #1e88e5;
}
</style>
