<template>
  <v-container class="education-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="education-title">Opleidingen</h1>
        <v-expansion-panels>
          <v-expansion-panel v-for="(education, index) in educations" :key="index">
            <v-expansion-panel-header>
              <v-icon class="education-icon">{{ education.icon }}</v-icon>
              <div class="education-text">
                <span class="education-year">{{ education.year }}</span>
                <span class="education-degree">{{ education.degree }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="education-details">
                <p><strong>School:</strong> {{ education.school }}</p>
                <p><strong>Beschrijving:</strong> {{ education.description }}</p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <h2 class="certificates-title">Diploma's en Certificaten</h2>
        <v-expansion-panels>
          <v-expansion-panel v-for="(certificate, index) in certificates" :key="index">
            <v-expansion-panel-header>
              <v-icon class="certificate-icon">{{ certificate.icon }}</v-icon>
              <div class="certificate-text">
                <span class="certificate-name">{{ certificate.name }}</span>
                <span class="certificate-issuer">{{ certificate.issuer }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="certificate-details">
                <p><strong>Afgegeven op:</strong> {{ certificate.date }}</p>
                <p v-if="certificate.reference"><strong>Referentienummer:</strong> {{ certificate.reference }}</p>
                <p v-if="certificate.skills"><strong>Vaardigheden:</strong> {{ certificate.skills }}</p>
                <a v-if="certificate.link" :href="certificate.link" target="_blank">Certificaat weergeven</a>
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
  name: 'EducationPage',
  data() {
    return {
      educations: [
        {
          year: '2023 - heden',
          degree: 'Bachelor Marketing',
          school: 'Odisee',
          description: 'Opstarten in september. Bachelor marketing.',
          icon: 'mdi-school'
        },
        {
          year: '2018 - 2021',
          degree: 'Graduaat Informatica',
          school: 'Odisee',
          description: 'Graduaat informatica - programmeren.',
          icon: 'mdi-laptop'
        },
        {
          year: '2013 - 2016',
          degree: 'Orthoptist - Optometrist',
          school: 'Syntra',
          description: 'Orthoptist - Optometrist, Optiek / Optica.',
          icon: 'mdi-eye'
        },
        {
          year: '1999 - 2006',
          degree: 'Verkoop / Vertegenwoordiging',
          school: 'Handelsschool Aalst',
          description: 'Handelsschool Aalst.',
          icon: 'mdi-account-tie'
        }
      ],
      certificates: [
        {
          icon: 'mdi-google',
          name: 'Google Ads-certificeringen',
          issuer: 'Udemy',
          date: 'okt. 2023',
          reference: 'UC-3a9006f8-284f-4cad-bc9f-064ab83e18c2',
          skills: 'Google Ads · Online marketing',
          link: 'https://www.udemy.com/certificate/UC-3a9006f8-284f-4cad-bc9f-064ab83e18c2'
        },
        {
          icon: 'mdi-google',
          name: 'Google Ads Mastery Course',
          issuer: 'Google',
          date: 'mrt. 2023',
          reference: 'M28 J7W CWV',
          skills: 'Online marketing · Marketing op sociale media',
          link: 'https://www.google.com/certificate/M28J7WCWV'
        },
        {
          icon: 'mdi-laptop',
          name: 'Graduaat Informatica',
          issuer: 'Odisee',
          date: 'jun. 2021',
          skills: 'Front-end ontwikkeling · Node.js · Webdesign · HTML5 · JavaScript',
        },
        {
          icon: 'mdi-eye',
          name: 'Orthoptist - Optometrist',
          issuer: 'Syntra Midden-Vlaanderen',
          date: 'jul. 2017',
          skills: 'Optometrie · Contactologie',
        },
        {
          icon: 'mdi-currency-usd',
          name: 'Kredietbemiddeling',
          issuer: 'Febelfin',
          date: 'jun. 2017',
        },
        {
          icon: 'mdi-office-building',
          name: 'Bedrijfsbeheer',
          issuer: 'KTA Handelsschool Aalst',
          date: 'jun. 2006',
        },
        {
          icon: 'mdi-handshake',
          name: 'Verkoop Vertegenwoordiging',
          issuer: 'KTA Handelsschool Aalst',
          date: 'jun. 2006',
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

.education-container {
  margin-top: 20px;
  animation: fadeIn 1s ease-in;
}

.education-title, .certificates-title {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.certificates-title {
  margin-top: 40px; /* Verhoogt de ruimte tussen de secties */
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

.education-icon, .certificate-icon {
  margin-right: 10px;
  color: #42a5f5;
  font-size: 24px; /* Stel de grootte van de iconen in */
  align-self: flex-start; /* Link uitlijnen */
}

.education-text, .certificate-text {
  display: flex;
  flex-direction: column;
}

.education-year, .certificate-name {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #42a5f5;
}

.education-degree, .certificate-issuer {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}

.education-details, .certificate-details {
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
