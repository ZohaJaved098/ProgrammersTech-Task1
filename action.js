
document.addEventListener("DOMContentLoaded", function() 
{
const timelineItems = document.querySelectorAll('.timeline-item');
const handleScroll = () => {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
};
window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial call to handle already visible items
});
