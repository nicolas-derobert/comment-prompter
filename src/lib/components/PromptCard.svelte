<!--
  Le composant PromptCard est la brique de base pour afficher un prompt.
  Il utilise les Runes de Svelte 5. `$props()` est une rune qui déclare
  les propriétés que le composant peut recevoir. C'est plus concis et performant
  que l'ancien `export let`.
-->
<script>
	let { title, description, category, model } = $props();
</script>

<div
	class="
    bg-gray-800/50 border border-gray-700 rounded-lg p-6
    flex flex-col group
    hover:border-violet-500/80 hover:bg-gray-800
    transition-all duration-300
    transform hover:-translate-y-1
    shadow-lg hover:shadow-2xl hover:shadow-violet-500/10
  "
>
	<div class="flex-grow">
		<!-- Catégorie et Modèle -->
		<div class="flex items-center justify-between mb-2">
			<span class="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300">
				{category}
			</span>
			<span class="text-xs text-gray-500 font-mono">{model}</span>
		</div>

		<!-- Titre -->
		<h3 class="text-xl font-bold text-gray-100 group-hover:text-white mb-2">
			{title}
		</h3>

		<!-- Description -->
		<p class="text-gray-400 text-sm leading-relaxed">
			{description}
		</p>
	</div>

	<!-- Bouton (exemple) -->
	<div class="mt-6">
		<a
			href="#/"
			class="
        w-full text-center px-4 py-2 rounded-md text-sm font-semibold
        bg-gray-700/50 text-gray-300
        group-hover:bg-violet-500 group-hover:text-white
        transition-all duration-300
      "
		>
			Voir le Prompt
		</a>
	</div>
</div>
