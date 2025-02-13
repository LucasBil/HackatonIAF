<template>
    <div class="newsletter-page">
      <h1>📩 Nos Newsletters</h1>
  
      <!-- Affichage du loader pendant le chargement -->
      <p v-if="loading" class="loading">Chargement des newsletters...</p>
  
      <!-- Liste des newsletters -->
      <ul v-if="!loading && newsletters.length">
        <li v-for="newsletter in newsletters" :key="newsletter.link" class="newsletter-card">
          <div class="newsletter-content">
            <h2><a :href="newsletter.link" target="_blank">{{ newsletter.title }}</a></h2>
            <p class="date">{{ formatDate(newsletter.date) }}</p>
            <p class="description">{{ newsletter.description }}</p>
          </div>
        </li>
      </ul>
  
      <!-- Message si aucune newsletter n'est disponible -->
      <p v-if="!loading && newsletters.length === 0">Aucune newsletter disponible.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  // Variables réactives
  const newsletters = ref([]);
  const loading = ref(true);
  
  // Fonction pour formater la date
  const formatDate = (dateStr) => {
    if (!dateStr) return "Date inconnue";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
  };
  
  // Charger les newsletters au montage
  onMounted(async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsletters");
      newsletters.value = response.data;
    } catch (error) {
      console.error("Erreur de récupération des newsletters :", error);
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .newsletter-page {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    color: #ff6b6b;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .loading {
    font-size: 1.2rem;
    color: #555;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .newsletter-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.2s;
  }
  
  .newsletter-card:hover {
    transform: scale(1.02);
  }
  
  h2 {
    margin: 0;
    font-size: 1.4rem;
  }
  
  a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .date {
    font-size: 0.9rem;
    color: #666;
    margin: 5px 0;
  }
  
  .description {
    font-size: 1rem;
    color: #444;
    margin-top: 10px;
  }
  </style>
  