// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('.nav-link');
	const pages = document.querySelectorAll('.page');

	// Function to show the selected page
	function showPage(pageId) {
		// Hide all pages
		pages.forEach(page => {
			page.classList.remove('active');
		});

		// Show the selected page
		const selectedPage = document.getElementById(pageId);
		selectedPage.classList.add('active');

		// Update active nav link
		navLinks.forEach(link => {
			link.classList.remove('text-blue-600');
			if (link.getAttribute('data-page') === pageId) {
				link.classList.add('text-blue-600');
			}
		});

		// If showing modules page, load the modules
		if (pageId === 'modules') {
			loadModules();
		}
	}

	// Function to load and display modules
	function loadModules() {
		const modulesContainer = document.getElementById('modules-container');
		modulesContainer.innerHTML = ''; // Clear existing content

		// Create and append module cards
		modules.forEach(module => {
			const moduleCard = document.createElement('div');
			moduleCard.className = 'module-card card-hover';
			moduleCard.innerHTML = `
                <img src="${module.image}" alt="${module.title}" class="module-image">
                <div class="module-content">
                    <h3 class="module-title">${module.title}</h3>
                    <p class="module-description">${module.description}</p>
                    <div class="module-meta">
                        <span>${module.date}</span>
                        <span class="module-level">${module.level}</span>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                        Duration: ${module.duration}
                    </div>
                </div>
            `;
			modulesContainer.appendChild(moduleCard);
		});
	}

	// Add click event listeners to navigation links
	navLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const pageId = link.getAttribute('data-page');
			showPage(pageId);
		});
	});

	// Show home page by default
	showPage('home');
});
