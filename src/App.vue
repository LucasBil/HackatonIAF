<script setup>
import '@/assets/css/navbar.css'
import { RouterLink, RouterView } from 'vue-router'
import ChatbotComponent from './components/ChatbotComponent.vue';
import PolytechIcon from './assets/polytechIcon.vue';
import IAFIcon from './assets/iafIcon.vue';
</script>

<template>
  <header>
    <nav id="desktop-nav">
      <ul id="navbar">
        <li>
          <router-link to="/" id="logo">
            <img src="@/assets/images/Logo_IAF.png" alt="">
            <span>Ingénieur.e au <span class="title-purple">féminin</span></span>
          </router-link>
        </li>
        <div class="nav-items">
            <li class="nav-item">
              <router-link to="/">L'association</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/newsletter">Newsletter</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">Contact</router-link>
            </li>
        </div>
      </ul>
      <div class="pink-box"></div>
      <div class="dark-box"></div>
    </nav>
    <nav class="navbar bg-body-tertiary" id="mobile-nav">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/images/Logo_IAF.png" alt="Logo" class="d-inline-block align-text-top">
          <span>Ingénieur.e au <span class="title-purple">féminin</span></span>
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">L'association</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/agenda">Agenda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pink-box"></div>
      <div class="dark-box"></div>
    </nav>
  </header>

  <ChatbotComponent />
  <RouterView />
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center mx-3">
      <RouterLink to="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <IAFIcon />
      </RouterLink>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex px-3">
      <li class="ms-3">
        <a class="text-body-secondary" href="https://www.univ-smb.fr/polytech/?s=association">
          <PolytechIcon />
        </a>
      </li>
      <li class="ms-3">
        <a class="text-body-secondary" href="https://www.instagram.com/iaf_7374/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" fill="currentColor">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</template>