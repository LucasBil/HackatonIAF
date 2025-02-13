<script setup>
import '@/assets/css/navbar.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="desktop-nav">
      <ul id="navbar">
        <li>
          <router-link to="/" id="logo">
            <img src="@/assets/Logo_IAF.png" alt="">
            <span>Ingénieur.e au <span class="title-purple">féminin</span></span>
          </router-link>
        </li>
        <div class="nav-items">
            <li class="nav-item">
              <router-link to="/">L'association</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/agenda">Agenda</router-link>
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
        <a class="navbar-brand" href="/">
          <img src="@/assets/Logo_IAF.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Ingénieur.e au féminin
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">L'association</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/agenda">Agenda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
  <footer></footer>
</template>