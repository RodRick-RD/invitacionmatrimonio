// Configura la fecha del evento aquí
const eventDate = new Date("April 15, 2026 15:00:00").getTime();

const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  // Cálculos de tiempo
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  // Inyectar en el HTML
  document.getElementById("days").innerText = d < 10 ? "0" + d : d;
  document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

  // Si la fecha ya pasó
  if (diff < 0) {
    clearInterval(updateCountdown);
    document.querySelector(".countdown-container").innerHTML = "<h3>¡Hoy es el gran día!</h3>";
  }
}, 1000);