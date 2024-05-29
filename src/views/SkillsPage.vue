<template>
  <v-container class="skills-container">
    <v-row>
      <v-col cols="12">
        <v-card flat class="skills-card">
          <v-card-title class="headline">Ik zoek deze skill:</v-card-title>
          <v-card-text>
            <div class="search-container">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Zoek een vaardigheid..."
                single-line
                clearable
                @keyup.enter="searchSkill"
              ></v-text-field>
            </div>
            <div v-if="searchResult" class="search-result">
              <v-alert type="info" dismissible @input="clearSearchResult">{{ searchResult }}</v-alert>
            </div>
            <v-expansion-panels multiple>
              <v-expansion-panel v-for="section in filteredSkills" :key="section.title">
                <v-expansion-panel-header>
                  {{ section.title }}
                  <v-icon class="expand-icon">mdi-chevron-down</v-icon>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-if="section.subsections">
                    <v-expansion-panels multiple>
                      <v-expansion-panel v-for="subsection in section.subsections" :key="subsection.title">
                        <v-expansion-panel-header>{{ subsection.title }}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div class="skills-list">
                            <div v-for="skill in subsection.skills" :key="skill.name" class="skill-item">
                              <v-chip
                                @click="toggleSkill(skill)"
                                class="skill-chip"
                                color="primary"
                                outlined
                              >
                                {{ skill.name }}
                                <v-icon v-if="skill.name === 'Nederlands' && section.title === 'Talen'" class="gold-crown">mdi-crown</v-icon>
                              </v-chip>
                              <transition name="fade">
                                <div v-if="selectedSkill === skill" class="skill-detail">
                                  <SkillRating :skill="selectedSkill" />
                                </div>
                              </transition>
                            </div>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                  <div v-else class="skills-list">
                    <div v-for="skill in section.skills" :key="skill.name" class="skill-item">
                      <v-chip
                        @click="toggleSkill(skill)"
                        class="skill-chip"
                        color="primary"
                        outlined
                      >
                        {{ skill.name }}
                        <v-icon v-if="skill.name === 'Nederlands' && section.title === 'Talen'" class="gold-crown">mdi-crown</v-icon>
                      </v-chip>
                      <transition name="fade">
                        <div v-if="selectedSkill === skill" class="skill-detail">
                          <SkillRating :skill="selectedSkill" />
                        </div>
                      </transition>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillRating from '@/components/SkillRating.vue';

export default {
  name: 'SkillsPage',
  components: {
    SkillRating
  },
  data() {
    return {
      search: '',
      searchResult: null,
      selectedSkill: null,
      skillSections: [
        {
          title: 'Talen',
          skills: [
            { name: 'Nederlands', level: 100, description: 'Vloeiend, Moedertaal' },
            { name: 'Engels', level: 90, description: 'Vloeiend' },
            { name: 'Frans', level: 70, description: 'Basis' }
          ]
        },
        {
          title: 'Marketing',
          skills: [
            { name: 'Online marketing', level: 90, description: 'Online marketing strategieën uitwerken' },
            { name: 'Offline marketing', level: 85, description: 'Offline marketing strategieën uitwerken' },
            { name: 'Google Analytics', level: 75, description: 'Analyseren van webverkeer met Google Analytics' },
            { name: 'Content creation', level: 85, description: 'Creëren van content voor verschillende platforms' },
            { name: 'Social media', level: 85, description: 'Beheren van social media campagnes' }
          ]
        },
        {
          title: 'Web Development',
          subsections: [
            {
              title: 'CMS',
              skills: [
                { name: 'Wordpress', level: 95, description: 'Beheersing van Wordpress CMS' },
                { name: 'Craft', level: 70, description: 'Beheersing van Craft CMS' },
                { name: 'Shopify', level: 70, description: 'Beheersing van Shopify CMS' },
                { name: 'Squarespace', level: 70, description: 'Beheersing van Squarespace CMS' }
              ]
            },
            {
              title: 'Code',
              skills: [
                { name: 'HTML', level: 95, description: 'Beheersing van HTML' },
                { name: 'CSS', level: 90, description: 'Beheersing van CSS' },
                { name: 'SASS', level: 85, description: 'Beheersing van SASS' },
                { name: 'JS', level: 75, description: 'Beheersing van JavaScript' },
                { name: 'Vue.js', level: 75, description: 'Beheersing van Vue.js framework' },
                { name: 'Laravel', level: 85, description: 'Beheersing van Laravel framework' }
              ]
            }
          ]
        },
        {
          title: 'Design',
          skills: [
            { name: 'Webdesign', level: 95, description: 'Professioneel webdesign' },
            { name: 'UI/UX', level: 85, description: 'Ontwerpen van UI/UX in Figma' },
            { name: 'Graphic Design', level: 85, description: 'Grafisch ontwerp' }
          ]
        },
        {
          title: 'Software',
          subsections: [
            {
              title: 'Adobe Creative Suite',
              skills: [
                { name: 'Adobe Photoshop', level: 90, description: 'Beheersing van Adobe Photoshop' },
                { name: 'Adobe Indesign', level: 90, description: 'Beheersing van Adobe Indesign' },
                { name: 'Adobe Illustrator', level: 75, description: 'Beheersing van Adobe Illustrator' },
                { name: 'Adobe Premiere Pro', level: 75, description: 'Beheersing van Adobe Premiere Pro' },
                { name: 'Adobe Bridge', level: 90, description: 'Beheersing van Adobe Bridge' },
                { name: 'Adobe Express', level: 90, description: 'Beheersing van Adobe Express' },
                { name: 'Adobe After Effects', level: 75, description: 'Beheersing van Adobe After Effects' }
              ]
            },
            {
              title: 'Microsoft 365',
              skills: [
                { name: 'Word', level: 95, description: 'Beheersing van Microsoft Word' },
                { name: 'Power Point', level: 95, description: 'Beheersing van Microsoft Power Point' },
                { name: 'Excel', level: 85, description: 'Beheersing van Microsoft Excel' },
                { name: 'Outlook', level: 95, description: 'Beheersing van Microsoft Outlook' },
                { name: 'Teams', level: 95, description: 'Beheersing van Microsoft Teams' },
                { name: 'Tasks', level: 80, description: 'Beheersing van Microsoft Tasks' }
              ]
            },
            {
              title: 'Andere',
              skills: [
                { name: 'Visual Studio Code', level: 85, description: 'Beheersing van Visual Studio Code' },
                { name: 'Figma', level: 80, description: 'Beheersing van Figma' },
                { name: 'Blender', level: 65, description: 'Beheersing van Blender' },
                { name: 'Autodesk Fusion', level: 75, description: 'Beheersing van Autodesk Fusion' }
              ]
            },
            {
              title: 'AI',
              skills: [
                { name: 'ChatGPT', level: 95, description: 'Beheersing van ChatGPT' },
                { name: 'DallE', level: 95, description: 'Beheersing van DallE' },
                { name: 'Adobe Firefly', level: 90, description: 'Beheersing van Adobe Firefly' },
                { name: 'Microsoft Copilot', level: 70, description: 'Beheersing van Microsoft Copilot' }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    filteredSkills() {
      if (!this.search) return this.skillSections;

      const result = [];
      for (const section of this.skillSections) {
        const matchingSection = { ...section, skills: [], subsections: section.subsections ? [] : null };
        
        if (section.subsections) {
          for (const subsection of section.subsections) {
            const matchingSubsection = { ...subsection, skills: subsection.skills.filter(skill => skill.name.toLowerCase().includes(this.search.toLowerCase())) };
            if (matchingSubsection.skills.length) matchingSection.subsections.push(matchingSubsection);
          }
        } else {
          matchingSection.skills = section.skills.filter(skill => skill.name.toLowerCase().includes(this.search.toLowerCase()));
        }
        
        if (matchingSection.skills.length || (matchingSection.subsections && matchingSection.subsections.length)) {
          result.push(matchingSection);
        }
      }
      return result;
    }
  },
  methods: {
    toggleSkill(skill) {
      if (this.selectedSkill === skill) {
        this.selectedSkill = null;
      } else {
        this.selectedSkill = skill;
      }
    },
    searchSkill() {
      this.searchResult = null;
      const foundSkill = this.skillSections.some(section => {
        if (section.subsections) {
          return section.subsections.some(subsection => {
            return subsection.skills.some(skill => skill.name.toLowerCase().includes(this.search.toLowerCase()));
          });
        }
        return section.skills.some(skill => skill.name.toLowerCase().includes(this.search.toLowerCase()));
      });
      
      if (!foundSkill) {
        this.searchResult = `${this.search} - zit niet in de skillset van Michaël.... yet`;
      } else {
        this.searchResult = `Gevonden: ${this.search}`;
        const element = document.querySelector(`[data-skill="${this.search.toLowerCase()}"]`);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    clearSearchResult() {
      this.searchResult = null;
    }
  }
}
</script>

<style scoped>
.skills-container {
  margin-top: 20px;
}

.skills-card {
  padding: 20px;
  margin-bottom: 20px;
}

.headline {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-result {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.skills-section {
  margin-bottom: 30px;
}

.section-title {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
}

.subsection-title {
  font-family: 'Roboto', sans-serif;
  font-size: 16px; /* Kleiner lettertype voor ondertitels */
  font-weight: 400;
  margin-bottom: 10px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.skill-chip {
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 5px;
}

.skill-chip:hover {
  transform: scale(1.05);
}

.gold-crown {
  color: gold;
  margin-left: 5px;
}

.skill-detail {
  margin-top: 10px;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid #e0e0e0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.expand-icon {
  position: absolute;
  right: 16px;
  top: 16px;
  transition: transform 0.3s;
}

.v-expansion-panel-header--active .expand-icon {
  transform: rotate(180deg);
}
</style>
