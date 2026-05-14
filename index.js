document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const fileItems = document.querySelectorAll('.file-item');

    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        fileItems.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            const fileNameElement = item.querySelector('.file-name');
            const fileName = fileNameElement ? fileNameElement.textContent.toLowerCase() : '';
            const fileType = item.querySelector('.file-type') ? item.querySelector('.file-type').textContent.toLowerCase() : '';
            
            const matches = name.includes(searchTerm) || fileName.includes(searchTerm) || fileType.includes(searchTerm);
            
            if (searchTerm === '' || matches) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });

    document.querySelectorAll('.file-item.folder').forEach(folder => {
        folder.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const nextElement = this.nextElementSibling;
                if (nextElement && nextElement.classList.contains('file-item-nested')) {
                    nextElement.classList.toggle('hidden');
                }
            }
        });
    });
});
