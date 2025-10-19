const countdown = document.getElementById('countdown');
const target = new Date("Oct 24, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) {
    countdown.innerHTML = "🚀 ¡Ya abrimos! Pedí online 😍";
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);
  countdown.innerHTML = `${d}d : ${h}h : ${m}m : ${s}s`;
}, 1000);
