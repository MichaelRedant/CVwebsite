<template>
  <v-container class="about-container">
    <v-row>
      <v-col cols="12" md="4">
        <transition name="slide-fade">
          <v-img v-if="!showNavImage" src="@/assets/profile.jpeg" alt="Michaël Redant" class="profile-img"></v-img>
        </transition>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat class="about-card">
          <v-card-title class="headline">Over mij</v-card-title>
          <v-card-text>
            <p>Ik ben <strong>Michaël Redant</strong>, een gepassioneerde <strong>marketeer</strong> en <strong>webdesigner</strong>. Buiten mijn werk geniet ik van een rijk gezinsleven met mijn vrouw en dochter. Ik ben actief betrokken bij verschillende sociale projecten, zoals de <strong>Werkgroep Ondernemend Herzele</strong> en had het voorrecht om voorzitter te zijn van de handelsvereniging van Aalst, <strong>District A</strong>.</p>

            <p>In mijn vrije tijd houd ik van <strong>3D-printen</strong>, <strong>dronevliegen</strong> en duik ik graag in de wereld van <strong>gaming</strong>, vooral <strong>Dungeons & Dragons</strong> met vrienden. Ik streef naar een gezonde balans tussen werk en privé, omdat ik geloof dat dit essentieel is voor zowel persoonlijk welzijn als professioneel succes.</p>

            <p>Ik ben een toegewijde marketeer met een bijberoep als freelance webdesigner en marketeer bij <a href="https://www.xinudesign.be" target="_blank"><strong>Xinudesign</strong></a> en een <strong>3D print service bedrijf</strong> bij <a href="https://www.x3dprints.be" target="_blank"><strong>X3DPrints</strong></a>. Mijn passie ligt in <strong>digitale contentcreatie</strong> en ik blijf gefascineerd door de ontwikkelingen in <strong>digitale marketing</strong>, mede dankzij mijn expertise in de <strong>Adobe Creative Suite</strong>.</p>

            <p>Momenteel werk ik als marketeer bij <strong>Octopus Accountancy Software</strong>, waar ik verantwoordelijk ben voor zowel online als offline marketingactiviteiten voor accountants en ondernemers. Deze rol heeft me waardevolle ervaring gebracht in het creëren van <strong>visuele content</strong>. Mijn benadering van marketing is gebaseerd op creativiteit, resultaatgerichtheid en voortdurende vernieuwing. Ik hecht waarde aan het opbouwen van duurzame <strong>merken</strong> en streef naar kwaliteit in elke <strong>campagne</strong>.</p>

            <p>Daarnaast heb ik me verdiept in <strong>kunstmatige intelligentie (AI)</strong> en <strong>custom GPT-modellen</strong>, waarmee ik traditionele marketingstrategieën heb uitgebreid. Mijn kennis op dit gebied stelt me in staat <strong>innovatieve</strong> en gepersonaliseerde <strong>marketingoplossingen</strong> te ontwikkelen, wat de efficiëntie en effectiviteit van digitale campagnes verhoogt. Door AI en aangepaste GPT-modellen te gebruiken, kan ik <strong>data-gedreven inzichten</strong> verkrijgen en de <strong>klantenervaring</strong> personaliseren, wat leidt tot betere <strong>klantbetrokkenheid</strong> en hogere <strong>conversieratio's</strong>.</p>

            <p>Tot slot koester ik een passie voor voortdurende <strong>persoonlijke en professionele ontwikkeling</strong>. Ik geloof sterk in levenslang leren, vooral in een snel veranderend veld als marketing en technologie. Deze instelling drijft me om op de hoogte te blijven van de nieuwste <strong>trends</strong>, <strong>technieken</strong> en <strong>tools</strong>.</p>

            <p>Hartelijk dank voor je interesse in mijn profiel.</p>
          </v-card-text>
          <v-card-actions class="about-links">
            <v-btn icon href="https://www.linkedin.com/in/michael-redant" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="https://www.instagram.com/m_redant/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://www.facebook.com/mredant1" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="mailto:michael.redant2@telenet.be">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      showNavImage: false
    };
  },
  mounted() {
    this.showNavImage = false;
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
.about-container {
  margin-top: 20px;
}

.profile-img {
  border-radius: 50%;
  width: 100%;
  height: auto;
}

.about-card {
  padding: 20px;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.about-links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.about-links v-btn {
  margin: 0 10px;
}
</style>
