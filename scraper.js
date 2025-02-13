import axios from 'axios';
import * as cheerio from 'cheerio';


const scrapeNewsletters = async () => {
    try {
        const url = "https://www.univ-smb.fr/polytech/?s=ingenieur_au_feminin";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const articles = [];

        $("article").each((index, element) => {
            const title = $(element).find(".entry-title a").text().trim();
            const link = $(element).find(".entry-title a").attr("href");
            const description = $(element).find(".entry-content p").text().trim();

            if (title && link) {
                articles.push({ title, link, description });
            }
        });

        return articles;
    } catch (error) {
        console.error("Erreur lors du scraping :", error);
        return [];
    }
};

// Exportation du module
export default scrapeNewsletters;
