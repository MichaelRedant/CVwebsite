<template>
    <v-container class="engagement-container">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="engagement-title">Sociaal Engagement</h1>
          <v-expansion-panels>
            <v-expansion-panel v-for="(engagement, index) in engagements" :key="index">
              <v-expansion-panel-header>
                <v-icon class="engagement-icon">{{ engagement.icon }}</v-icon>
                <div class="engagement-text">
                  <span class="engagement-role">{{ engagement.role }}</span>
                  <span class="engagement-period">{{ engagement.period }}</span>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="engagement-details">
                  <p>{{ engagement.description }}</p>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'EngagementPage',
    data() {
      return {
        engagements: [
          {
            role: 'Voorzitter · nov. 2023 – heden',
            period: 'Werkgroep Ondernemend Herzele',
            description: 'De werkgroep heeft als doelstellingen het bevorderen van overleg en samenwerking onder de ondernemers van Herzele, het promoten van de lokale economie en het organiseren van activiteiten ter ondersteuning hiervan.',
            icon: 'mdi-account-group'
          },
          {
            role: 'Voorzitter · dec. 2018 - okt. 2022',
            period: 'VZW District A',
            description: 'De handelsvereniging van stad Aalst, met als doel het verenigen van de verschillende dekenijen van de binnenstad, helpen opzetten en organiseren van evenementen in Aalst. Het verbeteren van de winkelervaring in Aalst.',
            icon: 'mdi-city'
          },
          {
            role: 'Voorzitter · jul. 2018 - okt. 2022',
            period: 'VZW Kattestraat Aalst',
            description: 'Engageren voor verschillende activiteiten en sociale media voor de verenigde handelaars kattestraat in Aalst.',
            icon: 'mdi-store'
          },
          {
            role: 'Lid · okt. 2019 - okt. 2022',
            period: 'Adviesraad Handel & Horeca stad Aalst',
            description: 'Adviezen geven binnen de stad Aalst.',
            icon: 'mdi-silverware'
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
  .engagement-container {
    margin-top: 20px;
    animation: fadeIn 1s ease-in;
  }
  
  .engagement-title {
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  
  .v-expansion-panel-header {
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
  }
  
  .v-expansion-panel-header:hover {
    background-color: #e0e0e0;
  }
  
  .engagement-icon {
    margin-right: 10px;
    color: #42a5f5;
    font-size: 24px;
    align-self: flex-start;
  }
  
  .engagement-text {
    display: flex;
    flex-direction: column;
  }
  
  .engagement-role, .engagement-period {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #42a5f5;
  }
  
  .engagement-details {
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #666;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  