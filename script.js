document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('imageUpload');
    const displayedImage = document.getElementById('displayedImage');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const currentFilterText = document.querySelector('.current-filter');

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                displayedImage.src = e.target.result;
                applyFilter('none');
                currentFilterText.textContent = 'Current Filter: None';
            };
            reader.readAsDataURL(file);
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            applyFilter(filter);
            currentFilterText.textContent = `Current Filter: ${filter.charAt(0).toUpperCase() + filter.slice(1)}`;
        });
    });

    function applyFilter(filter) {
        let filterValue = '';

        switch (filter) {
            case 'grayscale':
                filterValue = 'grayscale(100%)';
                break;
            case 'sepia':
                filterValue = 'sepia(100%)';
                break;
            case 'invert':
                filterValue = 'invert(100%)';
                break;
            case 'blur':
                filterValue = 'blur(5px)';
                break;
            case 'brightness':
                filterValue = 'brightness(150%)';
                break;
            case 'contrast':
                filterValue = 'contrast(200%)';
                break;
            default:
                filterValue = 'none';
        }

        displayedImage.style.filter = filterValue;
    }
});