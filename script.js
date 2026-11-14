function openLetter() {
    const envelope =
document.querySelector(".envelope");
    const fullLetter =
document.getElementById("fullLetter");

document.body.classList.add("dreamy");

    envelope.classList.add("open");
    
    setTimeout( ( ) => {

fullLetter.classList.add("show");
    }, 900);

    createConfetti();
}
function createConfetti() {
    const envelope = 
document.querySelector(".envelope");
   const symbols = ["✦", "✧", "★", "☆"];
    for (let i = 0; i < 18; i++) {
        const star =
    document.createElement("span");
            star.classList.add("confetti");
            star.textContent = symbols [i % symbols. length];

            const x = (Math.random() - 0.5)
        * 260;
            const y = (Math.random() - 0.5)
        *220;

            star.style.setProperty("--x", `${x}px`); 
            star.style.setProperty("--y", `${y}px`);
            
            envelope.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 1000);
    }
}