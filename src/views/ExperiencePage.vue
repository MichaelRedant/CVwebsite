<template>
    <v-container class="experience-container">
      <v-row>
        <v-col cols="12">
          <v-card flat class="experience-card">
            <v-card-title class="headline">Ervaring</v-card-title>
            <v-card-text>
              <v-timeline dense>
                <v-timeline-item
                  v-for="experience in experiences"
                  :key="experience.id"
                  :color="experience.color"
                  :icon="experience.icon"
                  small
                >
                  <v-card class="experience-item">
                    <v-card-title>{{ experience.title }}</v-card-title>
                    <v-card-subtitle>{{ experience.company }}</v-card-subtitle>
                    <v-card-text>
                      <strong>{{ experience.period }}</strong>
                      <p>{{ experience.description }}</p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ExperiencePage',
    data() {
      return {
        experiences: [
          {
            id: 1,
            title: 'Marketeer',
            company: 'Octopus Accountancy Software',
            period: '2023-10 - heden',
            description: 'Opzetten en beheren van marketingcampagnes zowel online als offline. Opmaken & beheren van de website. Opmaken & beheren van SEM en SEO.',
            color: 'primary',
            icon: 'mdi-briefcase'
          },
          {
            id: 2,
            title: 'Freelance marketeer & webontwikkelaar',
            company: 'Xinudesign',
            period: '2022-01 - heden',
            description: 'Marketing, webdevelopment & Graphic Design. Zelfstandig in bijberoep.',
            color: 'secondary',
            icon: 'mdi-briefcase'
          },
          {
            id: 3,
            title: '3D Print services',
            company: 'X3DPrints',
            period: '2023-09 - heden',
            description: '',
            color: 'primary',
            icon: 'mdi-printer-3d'
          },
          {
            id: 4,
            title: 'Franchise Optometrist',
            company: 'GrandOptical Aalst',
            period: '2017-09 - 2023-10',
            description: 'Opticien / Optometrist',
            color: 'secondary',
            icon: 'mdi-glasses'
          },
          {
            id: 5,
            title: 'Opticien',
            company: 'Hans Anders Gent',
            period: '2008-01 - 2017-09',
            description: 'Optiekmedewerker',
            color: 'primary',
            icon: 'mdi-glasses'
          }
        ]
      };
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
  .experience-container {
    margin-top: 20px;
  }
  
  .experience-card {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .headline {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  
  .experience-item {
    margin-bottom: 10px;
  }
  </style>
  