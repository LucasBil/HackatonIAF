import express from "express";
import cors from "cors";
import scrapeNewsletters from "./scraper.js"; // Note : Ajoute `.js` à l'import du scraper

const app = express();
app.use(cors());

app.get("/newsletters", async (req, res) => {
  try {
    const newsletters = await scrapeNewsletters();
    res.json(newsletters);
  } catch (error) {
    console.error("Erreur lors du scraping :", error);
    res.status(500).json({ error: "Impossible de récupérer les newsletters" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
