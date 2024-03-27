document.querySelectorAll('.nav_bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
