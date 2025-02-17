// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add functionality to the "View Gallery" button
    const viewGalleryButton = document.querySelector('.view-gallery');
    if (viewGalleryButton) {
        viewGalleryButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Gallery functionality is not implemented yet.');
        });
    }

    // Example: Add functionality to the "Download CV" link
    const cvLink = document.querySelector('a[href="download-cv-url"]');
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('CV download functionality is not implemented yet.');
        });
    }
});