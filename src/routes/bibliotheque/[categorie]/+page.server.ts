// src/routes/bibliotheque/[categorie]/+page.server.ts
import type { PageServerLoad } from './$types';

// Base de données factice pour la démonstration
const fakeDatabase = {
	multimodal: [
		{ id: 1, title: 'Créateur de Logo 3D', description: 'Génère un logo 3D photoréaliste pour une startup "QuantumLeap" avec un fond nébuleuse.', category: 'Image', model: 'Gemini 3.1' },
		{ id: 2, title: 'Composition Musicale Ambiante', description: 'Compose une piste audio de 3 minutes de style "ambient electronica" pour une vidéo de drone survolant des paysages islandais.', category: 'Audio', model: 'MusicFX 2' },
		{ id: 3, title: 'Analyse de Séquence Vidéo', description: 'Analyse cette séquence vidéo et décris les 5 actions principales qui se déroulent, avec leur timestamp.', category: 'Vidéo', model: 'Veo' },
		{ id: 4, title: 'Générateur de Personnage de Jeu', description: 'Crée un concept art complet (image) et une biographie (texte) pour un personnage de jeu vidéo de type "cyber-mage".', category: 'Multimodal', model: 'Gemini 3.1' }
	],
	agents: [
		{ id: 5, title: 'Planificateur de Voyage Autonome', description: 'Agis comme un agent de voyage. Planifie un itinéraire de 7 jours au Japon pour 2 personnes en mai, budget de 3000€.', category: 'Agents', model: 'Gemini Agent' },
		{ id: 6, title: 'Analyste de Code et Rédacteur de Tests', description: 'Analyse ce fichier `server.py` et écris une suite de tests unitaires complète avec Pytest pour couvrir toutes les fonctions.', category: 'Agents', model: 'Claude 4' },
		{ id: 7, title: 'Générateur de Campagne Marketing', description: 'Crée une campagne marketing complète (emails, posts réseaux sociaux, landing page) pour un nouveau casque VR.', category: 'Agents', model: 'Gemini Agent' },
		{ id: 8, title: 'Chercheur Scientifique', description: 'Fais des recherches sur les dernières avancées en matière de batteries à état solide et rédige un rapport de synthèse.', category: 'Agents', model: 'Gemini 3.1' }
	],
    // Ajoutez d'autres catégories ici (b2b, etc.)
};

/**
 * La fonction `load` s'exécute côté serveur avant que la page ne soit rendue.
 * Elle récupère les données nécessaires pour la page.
 * @param params Contient les paramètres dynamiques de l'URL, ici `categorie`.
 */
export const load: PageServerLoad = async ({ params }) => {
	const { categorie } = params;

    // Simule un appel à une base de données en récupérant les prompts
    // de la catégorie correspondante.
	const prompts = fakeDatabase[categorie] || [];

	// Les données retournées ici sont automatiquement disponibles
	// dans le composant de page Svelte via la prop `data`.
	return {
		categorie,
		prompts
	};
};
