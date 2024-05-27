<template>
  <v-container class="education-container">
    <v-row>
      <v-col cols="12">
        <v-card flat class="education-card">
          <v-card-title class="headline">Opleidingen</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" v-for="education in education" :key="education.id">
                <v-card class="education-item">
                  <v-card-title class="education-title">{{ education.title }}</v-card-title>
                  <v-card-subtitle class="education-institution">{{ education.institution }}</v-card-subtitle>
                  <v-card-text>
                    <strong>{{ education.period }}</strong>
                    <p>{{ education.description }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EducationPage',
  data() {
    return {
      education: [
        {
          id: 1,
          title: 'Bachelor Marketing',
          institution: 'Odisee',
          period: 'Opstarten in september',
          description: 'Bachelor marketing',
        },
        {
          id: 2,
          title: 'Graduaat Informatica',
          institution: 'Odisee',
          period: '2018 - 2021',
          description: 'Graduaat informatica - programmeren',
        },
        {
          id: 3,
          title: 'Orthoptist - Optometrist',
          institution: 'Syntra',
          period: '2013 - 2016',
          description: 'Orthoptist - Optometrist, Optiek / Optica',
        },
        {
          id: 4,
          title: 'Diploma Verkoop / Vertegenwoordiging',
          institution: 'Handelsschool Aalst',
          period: '1999 - 2006',
          description: '',
        }
      ]
    };
  }
}
</script>

<style scoped>
.education-container {
  margin-top: 20px;
}

.education-card {
  padding: 20px;
  margin-bottom: 20px;
}

.headline {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.education-item {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.education-item:hover {
  transform: translateY(-10px);
}

.education-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}

.education-institution {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}
</style>
