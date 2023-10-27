const container = document.querySelector(".particle-container");
const colors = ["#439bf6", "#fc45e0"];

function createParticle() {
  const particle = document.createElement("div");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  particle.className = "particle";
  particle.style.backgroundColor = randomColor;
  particle.style.boxShadow = `0 0 1rem ${randomColor}, 0 0 1.5rem ${randomColor}`;

  const size = Math.random() * 30 + 10;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  particle.style.transform = `translate(${x}px, ${y}px)`;

  container.appendChild(particle);

  requestAnimationFrame(() => {
    particle.style.transform = "translate(0, 0)";
    particle.style.opacity = 1;
  });

  setTimeout(() => {
    particle.style.opacity = 0;
    requestAnimationFrame(() => {
      container.removeChild(particle);
    });
  }, 1000);
}

setInterval(createParticle, 70);
