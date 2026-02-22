<!--
  La page d'accueil (Homepage).
  Elle utilise le composant `PromptCard` pour présenter des exemples de prompts
  et guider l'utilisateur vers les sections principales.
-->
<script>
	import PromptCard from '$lib/components/PromptCard.svelte';
</script>

<svelte:head>
	<title>Comment Prompter - Maîtrisez les IA de 2026</title>
	<meta
		name="description"
		content="La plateforme de référence pour le prompting IA avancé. Apprenez à maîtriser les modèles comme Gemini 3.1, Veo, et les agents autonomes."
	/>
</svelte:head>

<div class="space-y-24">
	<!-- Hero Header -->
	<section class="text-center pt-16">
		<h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-500">
			Maîtrisez les IA de 2026.
		</h1>
		<h2 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
			Promptez comme un Ingénieur.
		</h2>
		<p class="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
			La première plateforme francophone dédiée à l'ingénierie de prompts pour les modèles de nouvelle génération et les agents autonomes.
		</p>
		<a
			href="/bibliotheque/multimodal"
			class="inline-block bg-violet-600 text-white font-bold text-lg px-8 py-4 rounded-full
            hover:bg-violet-500 transition-all duration-300
            shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/40
            transform hover:scale-105"
		>
			Explorer la Bibliothèque
		</a>
	</section>

	<!-- Catégories Populaires -->
	<section>
		<h3 class="text-3xl font-bold text-center mb-10">Catégories Populaires</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<a href="/bibliotheque/multimodal" class="block p-8 bg-gray-800/50 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300 border border-gray-700 hover:border-blue-500">
				<h4 class="text-2xl font-bold mb-2 text-blue-400">Multimodal</h4>
				<p class="text-gray-400">Texte, image, son, vidéo. Créez des prompts qui exploitent toutes les dimensions.</p>
			</a>
			<a href="/bibliotheque/agents" class="block p-8 bg-gray-800/50 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300 border border-gray-700 hover:border-violet-500">
				<h4 class="text-2xl font-bold mb-2 text-violet-400">Agents Autonomes</h4>
				<p class="text-gray-400">Orchestrez des agents IA pour accomplir des tâches complexes en plusieurs étapes.</p>
			</a>
			<a href="/bibliotheque/b2b" class="block p-8 bg-gray-800/50 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300 border border-gray-700 hover:border-green-500">
				<h4 class="text-2xl font-bold mb-2 text-green-400">B2B & Automatisation</h4>
				<p class="text-gray-400">Intégrez l'IA dans vos workflows métier pour une productivité décuplée.</p>
			</a>
		</div>
	</section>

	<!-- Grille d'exemples -->
	<section>
		<h3 class="text-3xl font-bold text-center mb-10">Prompts à la Une</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<PromptCard
				title="Générateur de Storyboard Vidéo"
				description="Crée une séquence de 12 plans de storyboard pour une publicité de boisson énergisante, incluant description visuelle et dialogue."
				category="Vidéo"
				model="Veo"
			/>
			<PromptCard
				title="Agent de Recherche et Synthèse"
				description="Agis comme un analyste financier. Recherche les tendances du marché des semi-conducteurs en 2026 et rédige une synthèse de 500 mots."
				category="Agents"
				model="Gemini 3.1"
			/>
			<PromptCard
				title="Débugueur de Code Next.js"
				description="Analyse ce composant React Server Component et identifie la cause des fuites de mémoire potentielles lors du rendu."
				category="Code"
				model="Claude 4"
			/>
		</div>
	</section>
</div>
