<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="contact-title">Contacteer mij</h1>
        <v-form ref="form" v-model="valid" @submit.prevent="sendEmail">
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="Naam"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mailadres"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Telefoonnummer"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :rules="[rules.required]"
            label="Bericht"
            required
          ></v-textarea>
          <!-- Honeypot veld -->
          <v-text-field
            v-model="address"
            label="Adres"
            class="honeypot"
          ></v-text-field>
          <v-btn :disabled="!valid" color="primary" type="submit">Verstuur</v-btn>
        </v-form>
        <v-alert v-if="alertMessage" :type="alertType" dismissible @input="alertMessage = ''">{{ alertMessage }}</v-alert>
        <div class="contact-info">
          <p>Email: michael@xinudesign.be</p>
          <p>Telefoon: +32 0496.90.85.03</p>
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
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      address: '', // Honeypot veld
      alertMessage: '',
      alertType: 'success',
      rules: {
        required: value => !!value || 'Verplicht.',
        email: value => /.+@.+\..+/.test(value) || 'E-mailadres moet geldig zijn.'
      }
    };
  },
  methods: {
    sendEmail() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('message', this.message);
      formData.append('address', this.address); // Honeypot veld

      fetch('send_email.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          this.alertType = 'success';
          this.alertMessage = data.message;
          this.resetForm();
        } else {
          this.alertType = 'error';
          this.alertMessage = data.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.alertType = 'error';
        this.alertMessage = 'Er is iets misgegaan. Probeer het opnieuw.';
      });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.address = ''; // Reset honeypot veld
      this.$refs.form.reset();
    }
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
  margin-top: 20px;
  text-align: center;
}

.contact-info p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin: 5px 0;
}

/* Verberg honeypot veld voor normale gebruikers */
.honeypot {
  display: none;
}
</style>
