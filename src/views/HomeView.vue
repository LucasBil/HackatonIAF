<script setup>
import '@/assets/css/partenaires.css'
</script>

<template>
  <main class="d-flex flex-column">
    <div class="d-flex flex-column p-3">
      <h1>Ingénieur-e au féminin polytech Annecy-Chambéry</h1>
      <p>L'association <b>Ingénieur-e au féminin</b> de Polytech Annecy-Chambéry s'engage à promouvoir les métiers d'ingénieur auprès des jeunes filles, de l'école primaire au lycée. Elle organise divers événements, tels que des conférences, des afterworks, des soirées décontractées et des interventions en milieu scolaire, afin de sensibiliser les élèves aux opportunités offertes par les carrières scientifiques et technologiques. L'association mène également des sondages sur la mixité dans les écoles d'ingénieurs et partage des portraits de femmes scientifiques pour inspirer les futures générations. En 2024, elle a été récompensée par le prix de l'engagement étudiant du concours "Ingénieuses" de la CDEFI, reconnaissant ainsi ses efforts pour promouvoir l'égalité des genres dans l'ingénierie.</p>
      
      <section>
        <div id="carouselExampleControls" class="carousel slide w-50 h-75"data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="@\assets\images\image1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@\assets\images\image2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@\assets\images\image3.jpg" alt="Third slide">
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
      </section>
      
            <!-- Activités -->
<section class="activities">
  <h2 class="section-title">Nos Activités</h2>
  <div class="activities-grid">
    <div class="activity-card">
      <span class="icon">🎤</span>
      <h3>Conférences</h3>
      <p>Des rencontres inspirantes avec des experts du domaine de l'ingénierie.</p>
    </div>
    <div class="activity-card">
      <span class="icon">☕</span>
      <h3>Afterworks</h3>
      <p>Des moments conviviaux pour échanger et réseauter avec des professionnels.</p>
    </div>
    <div class="activity-card">
      <span class="icon">🎉</span>
      <h3>Soirées décontractées</h3>
      <p>Des événements festifs pour renforcer la cohésion et s’amuser.</p>
    </div>
    <div class="activity-card">
      <span class="icon">🏫</span>
      <h3>Interventions scolaires</h3>
      <p>Des sessions de sensibilisation auprès des jeunes pour promouvoir les carrières scientifiques.</p>
    </div>
    <div class="activity-card">
      <span class="icon">📊</span>
      <h3>Sondages sur la mixité</h3>
      <p>Analyse de la répartition des genres dans les écoles d’ingénieurs.</p>
    </div>
    <div class="activity-card">
      <span class="icon">🚪</span>
      <h3>Journées portes ouvertes</h3>
      <p>Des événements pour découvrir les parcours et les opportunités en ingénierie.</p>
    </div>
    <div class="activity-card">
      <span class="icon">👩‍🔬</span>
      <h3>Portraits de femmes scientifiques</h3>
      <p>Des témoignages inspirants de femmes travaillant dans le domaine scientifique.</p>
    </div>
  </div>
</section>


<!-- Objectif -->
<section class="objectif">
  <h2 class="section-title">🎯 Notre Objectif</h2>
  <div class="objectif-card">
    <span class="objectif-icon">🚀</span>
    <p>
      Nous souhaitons encourager les jeunes filles à envisager des carrières scientifiques et techniques,
      en leur offrant des opportunités d'échange, d'information et d’accompagnement tout au long de leurs études.
    </p>
  </div>
</section>
    </div>
    
     <!-- Partenaires -->
     <section id="partenaires">
              <h2>Nos Partenaires</h2>
              <div class="partenaires-container">
                <img src="@/assets/images/Logo_Credit_Agricol_Technologies_Services.jpg" alt="Crédit Agricole" class="partenaire-img">
                <img src="@/assets/images/Logo_CVEC.png" alt="CVEC" class="partenaire-img">
                <img src="@/assets/images/Logo_LISTIC.jpg" alt="LISTIC" class="partenaire-img">
                <img src="@/assets/images/Logo_NTN.png" alt="NTN" class="partenaire-img">
                <img src="@/assets/images/Logo_Sopra_Steria.png" alt="Sopra Steria" class="partenaire-img">
                <img src="@/assets/images/Logo_Ville_Annecy.png" alt="Ville d'Annecy" class="partenaire-img">
              </div>
            </section>
  </main>
</template>
