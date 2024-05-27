<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <h2>My Portfolio</h2>
          <v-card v-for="project in portfolio" :key="project.title" class="mb-3">
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'PortfolioPage',
    data() {
      return {
        portfolio: [
          { title: 'Project 1', description: 'Description of project 1' },
          { title: 'Project 2', description: 'Description of project 2' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Voeg je stijlen hier toe */
  </style>
  