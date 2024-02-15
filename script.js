
    // Original title
    const originalTitle = document.title;

    // Event listeners for visibility change
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            document.title = "Hey, come back!"; // Title when tab is inactive
        } else {
            document.title = originalTitle; // Restore original title
        }
    });

   
    // script.js
   
    const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})