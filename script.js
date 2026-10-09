const dropdownBtn = document.getElementById('about-dropdown-btn');
const dropdownContainer = document.getElementById('about-dropdown-container');
const dropdownMenu = document.getElementById('about-dropdown-menu');

if (dropdownBtn && dropdownContainer) {
    const toggleDropdown = (openState) => {
        const isOpen = openState !== undefined ? openState : !dropdownContainer.classList.contains('is-open');
        dropdownContainer.classList.toggle('is-open', isOpen);
        dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    // 1. Toggle dropdown on click (click once to show, click again to hide)
    dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown();
    });

    // 2. Close dropdown when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            toggleDropdown(false);
        }
    });

    // 3. Close on Escape key and return focus to the toggle button
    dropdownContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleDropdown(false);
            dropdownBtn.focus();
        }
    });

    // 4. Close menu automatically when clicking any link inside
    dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleDropdown(false);
        });
    });
}