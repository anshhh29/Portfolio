document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill');

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Toggle the 'active' class on click
            this.classList.toggle('active');
        });
    });

    // Function to simulate typing animation
    function typeWriter(text, element, delay) {
        let i = 0;
        const speed = 50; // Adjust typing speed as needed
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval); // Stop the animation when text is fully typed
            }
        }, speed);
    }

    // When the page loads
    const textElement = document.querySelector("#typing-text");
    
    // Clear the existing text content
    textElement.textContent = "";

    // Start the typing animation
    typeWriter("Hi there, I'm Ansh Popli", textElement, 50); // Adjust delay if needed
});
