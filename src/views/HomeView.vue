<script setup>
import '@/assets/css/partenaires.css'
</script>

<template>
  <main class="d-flex flex-column p-3">
    <h1>Ingénieur-e au féminin polytech Annecy-Chambéry</h1>
    <p>Ingénieur-e au féminin est une association étudiante à but non lucratif  de polytech annecy - chambéry qui vise à la promotion des métiers d’ingénieurs auprès de lycéennes , colégiennes et primaires . </p>
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="..." alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <h1>Acitivité</h1>
    <ul class="list-group">
        <li class="list-group-item">Conférences</li>
        <li class="list-group-item">Afterworks</li>
        <li class="list-group-item">Soirées décontractées</li>
        <li class="list-group-item">Interventions en milieu scolaire</li>
        <li class="list-group-item">Sondages sur la mixité dans les écoles d’ingénieurs</li>
        <li class="list-group-item">Journées portes ouvertes</li>
        <li class="list-group-item">Portraits de femmes scientifiques</li>
    </ul>
    <h1>Objectif</h1>
    <p></p>

    <div id="partenaires">
      <h2>Partenaires</h2>
      <div class="vert-hr"></div>
      <img src="@/assets/images/Logo_Credit_Agricol_Technologies_Services.jpg" alt="Crédit Agricole" class="partenaire-img">
      <img src="@/assets/images/Logo_CVEC.png" alt="CVEC" class="partenaire-img">
      <img src="@/assets/images/Logo_LISTIC.jpg" alt="LISTIC" class="partenaire-img">
      <img src="@/assets/images/Logo_NTN.png" alt="NTN" class="partenaire-img">
      <img src="@/assets/images/Logo_Sopra_Steria.png" alt="Sopra Steria" class="partenaire-img">
      <img src="@/assets/images/Logo_Ville_Annecy.png" alt="Ville d'Annecy" class="partenaire-img">
    </div>
  </main>
</template>
