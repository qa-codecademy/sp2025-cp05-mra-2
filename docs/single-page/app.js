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
