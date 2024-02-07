document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.titles .links');
    const contents = document.querySelectorAll('.titles-content');

    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            toggleContent(index);
            toggleActiveLink(index);
        });
    });

    function toggleContent(index) {
        contents.forEach((content, i) => {
            if (i === index) {
                content.classList.add('active-content');
            } else {
                content.classList.remove('active-content');
            }
        });
    }

    function toggleActiveLink(index) {
        links.forEach((link, i) => {
            if (i === index) {
                link.classList.add('active-links');
            } else {
                link.classList.remove('active-links');
            }
        });
    }
});
