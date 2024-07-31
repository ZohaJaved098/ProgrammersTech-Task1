
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



// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     document.getElementById('confirmationMessage').style.display = 'block'; // Show the confirmation message
//     setTimeout(function() {
//         document.getElementById('confirmationMessage').style.display = 'none'; // Hide the message after 5 seconds
//     }, 5000);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Using Font Awesome icon for demonstration
//     var iconHTML = '<i class="fa fa-android"></i>';
//     var pageTitle = "Zoha's Portfolio";
    
//     // Set the document title with the icon
//     document.title = iconHTML + ' ' + pageTitle;
// });