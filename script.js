function nextCard(cardId) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    document.getElementById(cardId).classList.remove('hidden');
}

function showSecret() {
    document.getElementById('secretMessage').classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("secretButton").classList.remove("hidden");
    }, 5000); 
});


document.addEventListener("DOMContentLoaded", function () {
    const nautyButton = document.getElementById("nauty-button");

    if (nautyButton) {
        nautyButton.addEventListener("mouseover", moveButton);  // Desktop
        nautyButton.addEventListener("mousemove", moveButton);  // Desktop
        nautyButton.addEventListener("touchstart", moveButton); // Mobile
    }

    function moveButton(event) {
        event.preventDefault(); // Prevent accidental taps from registering

        const parent = nautyButton.parentElement;
        const maxX = parent.clientWidth - nautyButton.clientWidth;
        const maxY = parent.clientHeight - nautyButton.clientHeight;

        const randomX = Math.random() * maxX*1.5;
        const randomY = Math.random() * maxY*1.5;

        nautyButton.style.position = "absolute";
        nautyButton.style.left = `${randomX}px`;
        nautyButton.style.top = `${randomY}px`;
    }
});




document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s duration
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 800);
});
