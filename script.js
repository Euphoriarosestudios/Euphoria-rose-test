let currentSlide = 0; // Default slide is Digital Painting

window.onload = function() {
    changeSlide(1); // Ensure the first slide (Digital Painting) is shown on load
}

function changeSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const aboutMeSection = document.getElementById('aboutMe');
    const characterDetailsSection = document.getElementById('characterDetails');
    const  PortfolioSection = document.getElementById('portfolio');
    const  paintingsSection = document.getElementById('paintings');

                    


    currentSlide = slideIndex;

    // Move the slider
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}vw)`;

    // Show/hide sections based on the current slide
    if (currentSlide === 0) {
        aboutMeSection.style.display = 'none'; 
        characterDetailsSection.style.display = 'block'; /* Show when Character Design is active */
        PortfolioSection.style.display = 'none';
        paintingsSection.style.display = 'block';


    } else if (currentSlide === 1) {
        aboutMeSection.style.display = 'block'; 
        characterDetailsSection.style.display = 'none'; 
        PortfolioSection.style.display = 'block';
        paintingsSection.style.display = 'block';


    } else if (currentSlide === 3) { 
        aboutMeSection.style.display = 'block'; 
        characterDetailsSection.style.display = 'block'; 
        PortfolioSection.style.display = 'block';
        paintingsSection.style.display = 'none';

    }
}
function showIllustrations() {
    // Hide other sections
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('characterDetails').style.display = 'none';

    // Show the "Illustrations" section
    document.getElementById('illustrationsSection').style.display = 'block';
}
