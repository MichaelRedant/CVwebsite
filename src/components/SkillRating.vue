<template>
    <div class="skill-rating">
      <div class="skill-header">
        <h3 class="skill-name">{{ skill.name }}</h3>
        <span class="skill-level">{{ skill.level }}%</span>
      </div>
      <v-progress-linear
        :value="skill.level"
        height="10"
        color="primary"
        class="skill-bar"
      ></v-progress-linear>
      <div class="skill-description">{{ skill.description }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillRating',
    props: {
      skill: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .skill-rating {
    margin-bottom: 20px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
  
  .skill-level {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #666;
  }
  
  .skill-bar {
    background-color: #e0e0e0;
    margin-bottom: 10px;
  }
  
  .skill-description {
    font-size: 14px;
    color: #666;
    font-family: 'Roboto', sans-serif;
  }
  </style>
  