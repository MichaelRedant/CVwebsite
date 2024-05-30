<template>
  <v-container class="experience-container">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="experience in experiences" :key="experience.id">
        <v-card class="experience-card">
          <v-card-title class="headline">{{ experience.title }}</v-card-title>
          <v-card-subtitle>{{ experience.company }}</v-card-subtitle>
          <v-card-text>
            <div class="experience-period">{{ experience.period }}</div>
            <v-btn text color="primary" @click="toggleDetails(experience.id)">Details</v-btn>
            <v-expand-transition>
              <div v-if="showDetails[experience.id]" class="experience-details">
                <p>{{ experience.longDescription }}</p>
              </div>
            </v-expand-transition>
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
      showDetails: {},
      experiences: [
        {
          id: 1,
          title: 'Marketeer',
          company: 'Octopus Accountancy Software',
          period: '2023-10 - heden',
          description: 'Opzetten en beheren van marketingcampagnes zowel online als offline.',
          longDescription: 'Als marketeer bij Octopus Accountancy Software ben ik verantwoordelijk voor het opzetten en beheren van marketingcampagnes zowel online als offline. Mijn taken omvatten het opmaken en beheren van de website, en het opmaken en beheren van SEM en SEO. Daarnaast werk ik nauw samen met het team om creatieve strategieën te ontwikkelen die de zichtbaarheid van het bedrijf vergroten en de betrokkenheid van klanten verhogen.'
        },
        {
          id: 2,
          title: 'Freelance marketeer & webontwikkelaar',
          company: 'Xinudesign',
          period: '2022-01 - heden',
          description: 'Marketing, webdevelopment & Graphic Design. Zelfstandig in bijberoep.',
          longDescription: 'In mijn rol als freelance marketeer en webontwikkelaar bij Xinudesign ben ik verantwoordelijk voor een breed scala aan marketing- en ontwikkelingsprojecten. Ik help bedrijven bij het opzetten van effectieve marketingstrategieën, het ontwikkelen van aantrekkelijke websites en het creëren van visueel aantrekkelijke grafische ontwerpen. Mijn werk heeft geleid tot een aanzienlijke verbetering van de online aanwezigheid en marketingprestaties van mijn klanten.'
        },
        {
          id: 3,
          title: '3D Print services',
          company: 'X3DPrints',
          period: '2023-09 - heden',
          description: 'Levering van 3D printdiensten.',
          longDescription: 'Bij X3DPrints lever ik een breed scala aan 3D printdiensten, variërend van het ontwerpen van 3D-modellen tot het daadwerkelijk printen van fysieke objecten. Mijn diensten zijn gericht op zowel particuliere klanten als bedrijven die behoefte hebben aan snelle en nauwkeurige prototyping. Door gebruik te maken van geavanceerde 3D-printtechnologieën, ben ik in staat om hoogwaardige en gedetailleerde printoplossingen te bieden.'
        },
        {
          id: 4,
          title: 'Franchise Optometrist',
          company: 'GrandOptical Aalst',
          period: '2017-09 - 2023-10',
          description: 'Opticien / Optometrist',
          longDescription: 'Als franchise optometrist bij GrandOptical Aalst was ik verantwoordelijk voor het uitvoeren van oogonderzoeken, het voorschrijven van brillen en contactlenzen, en het bieden van uitgebreide oogzorgdiensten. Mijn rol omvatte ook het beheer van de dagelijkse operaties van de franchise, het trainen van nieuw personeel en het waarborgen van een uitstekende klantenservice. Mijn inzet heeft bijgedragen aan de groei en het succes van de franchise.'
        },
        {
          id: 5,
          title: 'Opticien',
          company: 'Hans Anders Gent',
          period: '2008-01 - 2017-09',
          description: 'Optiekmedewerker',
          longDescription: 'Bij Hans Anders Gent werkte ik als opticien en was ik verantwoordelijk voor het helpen van klanten bij het kiezen van de juiste brillen en contactlenzen, het uitvoeren van oogmetingen en het bieden van advies over oogzorg. Mijn rol vereiste een sterke focus op klanttevredenheid en het leveren van hoogwaardige service. Tijdens mijn tijd bij Hans Anders heb ik waardevolle ervaring opgedaan in de optiekbranche en heb ik een diep begrip ontwikkeld van klantbehoeften en -verwachtingen.'
        }
      ]
    };
  },
  methods: {
    toggleDetails(id) {
      this.$set(this.showDetails, id, !this.showDetails[id]);
    }
  }
}
</script>
<style scoped>
.experience-container {
  margin-top: 20px;
}

.experience-card {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.experience-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.headline {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}

.experience-period {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #757575;
  margin-bottom: 10px;
}

.experience-details {
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #555;
}

.v-expand-transition {
  transition: max-height 0.5s ease;
}
</style>
