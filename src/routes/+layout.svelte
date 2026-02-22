<script>
	import './layout.css';
	import '../app.css'; // Import global styles
	import { page } from '$app/paths';

	// Icône pour le logo (un simple SVG pour l'exemple)
	const Logo = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-violet-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 3.104.566-.942a2.25 2.25 0 0 1 3.368 0l.566.942m-10.58 9.352.566.942a2.25 2.25 0 0 0 3.368 0l.566-.942m-7.5 3.75h15M14.25 15.75l.566.942a2.25 2.25 0 0 0 3.368 0l.566-.942M4.5 21.75l.566-.942a2.25 2.25 0 0 1 3.368 0l.566.942m3-18.396.566.942a2.25 2.25 0 0 0 3.368 0l.566-.942" />
    </svg>
  `;
</script>

<div
	class="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col"
>
	<header
		class="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50"
	>
		<nav
			class="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20"
		>
			<!-- Logo -->

			<a href="/" class="flex items-center space-x-2">
				{@html Logo}
				<span class="text-2xl font-bold text-white">Prompter</span>
			</a>

			<!-- Navigation Links -->

			<ul class="hidden lg:flex items-center space-x-8">
				<li>
					<a
						href="/bibliotheque/multimodal"
						class="text-gray-300 hover:text-violet-400 transition-colors duration-300"
					>Bibliothèque</a>
				</li>

				<li>
					<a
						href="/tutoriels"
						class="text-gray-300 hover:text-violet-400 transition-colors duration-300"
					>Tutoriels</a>
				</li>

				<li>
					<a
						href="/outils"
						class="text-gray-300 hover:text-violet-400 transition-colors duration-300"
					>Outils</a>
				</li>

				<li>
					<a
						href="/pro"
						class="text-gray-300 hover:text-violet-400 transition-colors duration-300"
					>Pro</a>
				</li>
			</ul>

			<!-- Search Bar -->

			<div class="hidden lg:flex items-center">
				<input
					type="search"
					placeholder="Rechercher un prompt..."
					class="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all w-64"
				/>
			</div>
		</nav>
	</header>

		<main class="flex-grow container mx-auto px-4 lg:px-8 py-12">

			<slot />

		</main>

	<footer
		class="bg-gray-900 border-t border-gray-800 mt-16"
	>
		<div
			class="container mx-auto px-4 lg:px-8 py-6 text-center text-gray-500"
		><p>© {new Date().getFullYear()} comment-prompter.com - Tous droits réservés.</p></div>
	</footer>
</div>
