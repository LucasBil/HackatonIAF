<script setup>
import '@/assets/css/partenaires.css'
</script>

<template>
  <main class="d-flex flex-column">
    <div class="d-flex flex-column p-3">
      <h1>Ingénieur-e au féminin polytech Annecy-Chambéry</h1>
      <p>L'association <b>Ingénieur-e au féminin</b> de Polytech Annecy-Chambéry s'engage à promouvoir les métiers d'ingénieur auprès des jeunes filles, de l'école primaire au lycée. Elle organise divers événements, tels que des conférences, des afterworks, des soirées décontractées et des interventions en milieu scolaire, afin de sensibiliser les élèves aux opportunités offertes par les carrières scientifiques et technologiques. L'association mène également des sondages sur la mixité dans les écoles d'ingénieurs et partage des portraits de femmes scientifiques pour inspirer les futures générations. En 2024, elle a été récompensée par le prix de l'engagement étudiant du concours "Ingénieuses" de la CDEFI, reconnaissant ainsi ses efforts pour promouvoir l'égalité des genres dans l'ingénierie.</p>
      
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
      <p>L'association <b>Ingénieur.e au féminin</b> de Polytech Annecy-Chambéry a pour mission de promouvoir l'égalité des genres dans les études scientifiques et les carrières d'ingénieur. Elle s'engage activement à lutter contre les stéréotypes de genre en sensibilisant les jeunes filles, de l'école primaire au lycée, aux opportunités offertes par les métiers de l'ingénierie. Parmi ses actions, l'association organise des conférences, des afterworks, des soirées décontractées, des interventions en milieu scolaire, des sondages sur la mixité dans les écoles d’ingénieurs, des journées portes ouvertes et des publications de portraits de femmes scientifiques. Elle vise ainsi à encourager les vocations scientifiques chez les jeunes filles et à favoriser une plus grande mixité dans les formations d'ingénieurs. </p>
    </div>
    
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
