
// Toggle the navbar visibility on small screens
const toggleButton = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    toggleButton.classList.toggle("active"); // Add this line to toggle the icon's rotation
});

GitHubCalendar(".calendar", "Jeremiah-Katumo");

document.addEventListener("DOMContentLoaded", function () {
    const words = ["Designer", "Data Scientist", "Developer", "Photographer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Typing speed in ms
    const backSpeed = 50; // Backspacing speed in ms
    const delayBetweenWords = 2000; // Delay before deleting

    function typeEffect() {
        const spanElement = document.getElementById("typed");
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            // Typing forward
            spanElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenWords);
                return;
            }
        } else {
            // Deleting backward
            spanElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? backSpeed : typingSpeed);
    }

    typeEffect();
});

const sections = document.querySelectorAll('.section');
const navbar = document.querySelector('.navbar');

// Create an IntersectionObserver callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });
};

// Options for the IntersectionObserver
const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the section is in view
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));



