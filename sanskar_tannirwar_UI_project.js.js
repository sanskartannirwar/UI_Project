document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle active class for the clicked item
        document.querySelectorAll('.sidebar-item-wrapper').forEach(wrapper => {
            wrapper.classList.remove('active');
        });
        item.parentElement.classList.add('active');
    });
 });