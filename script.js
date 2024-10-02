// Add animation effect on scroll
window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".card");
    const screenPosition = window.innerHeight / 1.2;

    cards.forEach(function (card) {
        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < screenPosition) {
            card.classList.add("fade-in");
        }
    });
});
