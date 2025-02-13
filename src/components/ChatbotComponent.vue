<template>
  <div>
    <!-- Bouton flottant pour ouvrir le chatbot -->
    <button v-if="!isChatOpen" class="chatbot-btn" @click="toggleChat">
      🤖
    </button>

    <!-- Fenêtre du chatbot -->
    <div v-if="isChatOpen" class="chat-container">
      <!-- Bouton de fermeture -->
      <button class="close-btn" @click="toggleChat">✖</button>

      <div class="chat-box">
        <div v-for="(msg, index) in messages" :key="index" :class="{'user-msg': msg.user, 'bot-msg': !msg.user}">
          <span v-if="msg.isLink">
            <a :href="msg.text" target="_blank" class="bot-link">{{ msg.text }}</a>
          </span>
          <span v-else v-html="msg.text"></span>
        </div>
      </div>

      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Posez-moi une question..." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatOpen: false, // 🔥 Assurez-vous que cette variable existe pour le toggle
      userInput: "",
      messages: [
        { text: "Bonjour ! Je suis le chatbot de l’association Ingénieur-e Au Féminin. Posez-moi vos questions ! 😊", user: false }
      ],
      isLoading: false,
      predefinedResponses: [
        { keywords: ["bonjour", "salut", "coucou", "hello"], response: "Bonjour ! 😊 Comment puis-je vous aider ?" },
        { keywords: ["merci", "au revoir", "bye", "a bientot"], response: "Avec plaisir ! À bientôt 👋" },
        { keywords: ["ingenieur au feminin"], response: "Ingénieur-e Au Féminin est une association étudiante créée en 2021 à Polytech Annecy - Chambéry. Elle vise à promouvoir les métiers d’ingénieurs auprès des jeunes filles." },
        { keywords: ["date de creation", "fondation", "crée"], response: "L'association Ingénieur-e Au Féminin a été créée en 2021." },
        { keywords: ["objectif", "but", "mission"], response: "L’association vise à promouvoir l’égalité des chances dans les métiers d’ingénieurs et à sensibiliser les jeunes filles aux carrières scientifiques." },
        { keywords: ["activites", "evenements", "actions"], response: "Nous organisons des conférences, afterworks, soirées, interventions en milieu scolaire et journées portes ouvertes pour encourager les filles à choisir l’ingénierie.Les membres actifs participent à des présentations dans des lycées, universités et autres établissements." },
        { keywords: ["mentorat", "accompagnement"], response: "Oui, l’association propose un programme de mentorat pour accompagner les femmes dans leur parcours en ingénierie." },
        { keywords: ["adhesion", "rejoindre", "membre", "inscrire", "intégrer", "faire partie"], response: 'Pour adhérer à l’association, il faut être étudiant à l’Université Savoie Mont Blanc et contacter l’association via <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a> ou <a href="https://linktr.ee/ingenieureau_feminin" target="_blank" class="bot-link">Linktree</a>.' },
        { keywords: ["reseaux sociaux", "instagram", "facebook", "site", "contacter"], response: 'Nous sommes présents sur <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a>, <a href="https://linktr.ee/ingenieureau_feminin" target="_blank" class="bot-link">Linktree</a> et vous pouvez nous contacter par mail : <a href="mailto:inge.feminin.polytech.ac@gmail.com" class="bot-link">inge.feminin.polytech.ac@gmail.com</a>.' },
        { keywords: ["conferences", "afterworks", "evenements"], response: "Nous organisons plusieurs événements tout au long de l’année : conférences, afterworks, portraits de femmes scientifiques et journées portes ouvertes." },
        { keywords: ["statistiques", "sondages", "taux"], response: "Nous réalisons des sondages pour analyser la place des femmes dans les différentes filières d’écoles d’ingénieurs." },
        { keywords: ["temoignages", "portraits", "scientifiques"], response: "Nous publions régulièrement des portraits et témoignages de femmes scientifiques sur nos réseaux sociaux." },
        { keywords: ["organigramme", "structure"], response: 'L\'organigramme de l\'association est disponible sur <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a>.' },
        { keywords: ["prix", "recompense", "concours"], response: "L'association a remporté le Prix Ingénieuse en mai 2024 pour son engagement étudiant." },
        { keywords: ["membre du bureau", "recrutement"], response: 'Pour devenir membre du bureau, il faut candidater en contactant l\'association en septembre via <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a> ou <a href="https://linktr.ee/ingenieureau_feminin" target="_blank" class="bot-link">Linktree</a>.' },
        { keywords: ["avantages", "pourquoi rejoindre"], response: "Être membre permet de gagner des PolyPoints et valoriser son CV grâce à l’expérience associative." },
        { keywords: ["desinscrire", "quitter", "arreter"], response: "Oui, il est possible de se désinscrire à tout moment, sauf pour les membres du bureau qui ont des engagements." },
        { keywords: ["que des femmes", "seulement des femmes", "egalite homme femme"], response: "L'association ne valorise pas uniquement les femmes, mais promeut l'égalité hommes-femmes dans les métiers d'ingénierie." },
        { keywords: ["futurs activites", "comment etre au courant"], response: "Vous pouvez suivre nos futures activités sur Instagram, Vibly, et le site de Polytech (LinkedIn et site officiel)." },
        { keywords: ["partenariats", "collaborations", "sponsors"], response: 'Nous sommes ouverts à toute proposition de partenariat, collaboration ou sponsoring. Contactez-nous via <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a> ou par mail à <a href="mailto:inge.feminin.polytech.ac@gmail.com" class="bot-link">inge.feminin.polytech.ac@gmail.com</a>.'},
        { keywords: ["soutien", "aide", "besoin d'aide"],response: 'Nous sommes là pour vous aider ! N\'hésitez pas à nous contacter via <a href="https://www.instagram.com/iaf_7374/" target="_blank" class="bot-link">Instagram</a> ou par mail à <a href="mailto:inge.feminin.polytech.ac@gmail.com" class="bot-link">inge.feminin.polytech.ac@gmail.com</a>.'},
        { keywords: ["intervention", "zones"], response: "Nos interventions ont principalement lieu dans la zone universitaire mais peuvent être organisées ailleurs." },
      ],
      instagramLink: "https://www.instagram.com/iaf_7374/"
    };
  },

  methods: {
    // 🔥 Fonction pour ouvrir/fermer le chatbot
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },

    normalizeText(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
    },

    async sendMessage() {
      if (this.userInput.trim() === "" || this.isLoading) return;

      let userMessage = this.normalizeText(this.userInput);
      this.messages.push({ text: this.userInput, user: true });
      this.userInput = "";
      this.isLoading = true;

      let responseText = "Désolé, je ne connais pas la réponse. 🤖";

      for (let item of this.predefinedResponses) {
        if (item.keywords.some(keyword => userMessage.includes(this.normalizeText(keyword)))) {
          responseText = item.response;
          break;
        }
      }

      if (responseText !== "Désolé, je ne connais pas la réponse. 🤖") {
        this.messages.push({ text: responseText, user: false });
        this.isLoading = false;
        return;
      }

      this.messages.push({ text: "Je ne connais pas la réponse exacte. Consulte notre Instagram pour plus d'infos ! 😊", user: false });
      this.messages.push({ text: `Consulte notre <a href="${this.instagramLink}" target="_blank" class="bot-link">Instagram</a> pour plus d'infos ! 😊`, user: false });

      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
/* 📌 Conteneur principal */
.chat-container {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 350px;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
}

/* 📌 Fenêtre du chatbot */
.chat-box {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

/* 📌 Messages utilisateur */
.user-msg {
  align-self: flex-end;
  background: #dcf8c6;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 10px;
  max-width: 80%;
  color: #000;
}

/* 📌 Messages du bot */
.bot-msg {
  align-self: flex-start;
  background: #f1f1f1;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 10px;
  max-width: 80%;
  color: #000;
}

/* 📌 Liens en bleu */
.bot-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.bot-link:hover {
  text-decoration: underline;
}

/* 📌 Champ input */
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  margin-top: 10px;
}

/* 📌 Bouton de fermeture */
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
}

/* 📌 Bouton flottant pour ouvrir le chatbot */
.chatbot-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.chatbot-btn:hover {
  background: #0056b3;
}
</style>
