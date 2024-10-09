document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti');

    function createConfetti() {
        const colors = ['#FF0D72', '#0DC2FF', '#0DFF72', '#F3FF0D', '#FF6E0D'];
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        // Randomize position
        confetti.style.left = Math.random() * 100 + 'vw'; // Positioning in viewport width
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Append to the confetti container
        confettiContainer.appendChild(confetti);

        // Remove the confetti piece after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    // Create multiple confetti pieces at once
    function launchConfetti() {
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    }

    // Trigger the confetti animation on page load
    launchConfetti();
});
