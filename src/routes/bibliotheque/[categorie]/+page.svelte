<!--
  Cette page affiche la liste des prompts pour une catégorie spécifique.
  Elle est rendue côté serveur (SSR) grâce au fichier `+page.server.ts` associé.
  Les données (prompts) sont passées à la page via la prop `data`.
  En Svelte 5, on accède à `data` via `$props()`.
-->
<script>
	import PromptCard from '$lib/components/PromptCard.svelte';

	// `$props()` contient toutes les props passées à la page,
	// y compris `data` qui vient de la fonction `load` du serveur.
	let { data } = $props();
</script>

<svelte:head>
	<title>Bibliothèque de Prompts : {data.categorie}</title>
	<meta name="description" content="Explorez notre collection de prompts pour la catégorie {data.categorie}." />
</svelte:head>

<div class="space-y-12">
	<section>
		<h1 class="text-4xl font-bold mb-2">
			Bibliothèque de Prompts :
			<span class="capitalize text-violet-400">{data.categorie}</span>
		</h1>
		<p class="text-lg text-gray-400">
			Une collection de prompts avancés pour la catégorie "{data.categorie}".
		</p>
	</section>

	<!-- Grille des prompts -->
	<section>
		{#if data.prompts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.prompts as prompt (prompt.id)}
					<PromptCard
						title={prompt.title}
						description={prompt.description}
						category={prompt.category}
						model={prompt.model}
					/>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16 px-8 bg-gray-800/50 rounded-lg border border-dashed border-gray-700">
				<h3 class="text-2xl font-bold text-gray-300">Oups !</h3>
				<p class="text-gray-500 mt-2">
					Il n'y a pas encore de prompts dans la catégorie "{data.categorie}". Revenez bientôt !
				</p>
			</div>
		{/if}
	</section>
</div>
