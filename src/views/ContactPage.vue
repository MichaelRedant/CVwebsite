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
          <v-btn :disabled="!valid" color="primary" type="submit">Verstuur</v-btn>
        </v-form>
        <v-alert v-if="alertMessage" type="success" dismissible @input="alertMessage = ''">{{ alertMessage }}</v-alert>
        <div class="contact-info">
          <p>Email: michael@xinudesign.be</p>
          <p>Telefoon: +32 0496.90.85.03</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactPage',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      alertMessage: '',
      rules: {
        required: value => !!value || 'Verplicht.',
        email: value => /.+@.+\..+/.test(value) || 'E-mailadres moet geldig zijn.'
      }
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        phone: this.phone,
        message: this.message
      };

      emailjs.send('service_mgc4cvq', 'template_wvpgibx', templateParams, '-sGG7XerTMORdNsUw')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.alertMessage = 'Bericht succesvol verstuurd!';
          this.resetForm();
        }, (error) => {
          console.log('FAILED...', error);
          this.alertMessage = 'Er is iets misgegaan. Probeer het opnieuw.';
        });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
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
</style>
