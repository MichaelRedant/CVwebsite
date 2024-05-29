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
            <p>Ik ben Michaël Redant, een toegewijde <strong>marketeer</strong> en met een bijberoep als freelance <strong>webdesigner/marketeer</strong> bij <a href="https://xinudesign.be" target="_blank">Xinudesign</a> en als 3D print service bedrijf bij <a href="https://x3dprints.be" target="_blank">X3DPrints</a>. Mijn passie ligt in digitale contentcreatie en ik ben voortdurend gefascineerd door de ontwikkelingen in marketing binnen het digitale tijdperk, mede dankzij mijn expertise in de <strong>Adobe CreativeSuite</strong>.</p>
            <p>Momenteel heb ik het voorrecht om te werken als marketeer bij <strong>Octopus Accountancy Software</strong>, waar ik verantwoordelijk ben voor zowel online als offline marketingactiviteiten, gericht op accountants en ondernemers die met Octopus werken. Deze rol heeft me waardevolle ervaring gebracht in het creëren van boeiende en impactvolle visuele content. Mijn benadering van marketing is gefundeerd op creativiteit, resultaatgerichtheid en constante innovatie, en ik hecht grote waarde aan het opbouwen van duurzame merken en streef naar excellentie in elke campagne.</p>
            <p>Daarnaast heb ik mij verdiept in de boeiende wereld van kunstmatige intelligentie (AI) en custom GPT-modellen, waarbij ik de grenzen van traditionele marketingstrategieën heb verlegd. Mijn kennis op dit gebied stelt me in staat innovatieve en gepersonaliseerde marketingoplossingen te ontwikkelen, die aanzienlijk bijdragen aan de efficiëntie en effectiviteit van digitale campagnes. Door het inzetten van AI en aangepaste GPT-modellen ben ik in staat om data-gedreven inzichten te verwerven en de klantenervaring te personaliseren, wat resulteert in verbeterde klantbetrokkenheid en hogere conversieratio's. Deze competenties hebben me geholpen om marketinginitiatieven naar een nieuw niveau van innovatie en succes te tillen.</p>
            <p>Buiten mijn professionele leven, geniet ik van een rijk gezinsleven met mijn vrouw en dochter. Ik ben ook sociaal betrokken bij verschillende projecten, waaronder mijn rol binnen de <strong>Werkgroep Ondernemend Herzele</strong>. Enkele jaren geleden had ik het voorrecht om voorzitter te zijn van de handelsvereniging van Aalst, <strong>District A</strong>. Ik ben ook gepassioneerd door 3D-printen en dronevliegen. In mijn vrije tijd duik ik graag in de wereld van gaming en geniet ik van de avonturen in Dungeons & Dragons met mijn vrienden. Ik ben vastbesloten om een gezonde balans tussen werk en privé te handhaven, wat ik essentieel vind voor zowel persoonlijk welzijn als professioneel succes. Bovendien koester ik een diepgewortelde passie voor voortdurende persoonlijke en professionele ontwikkeling. Ik ben sterk overtuigd van het belang van levenslang leren, vooral in een snel evoluerend veld als marketing en technologie. Deze instelling drijft me om constant op de hoogte te blijven van de nieuwste trends, technieken en tools.</p>
            <p>Hartelijk dank voor je interesse in mijn verhaal!</p>
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

.headline {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
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
