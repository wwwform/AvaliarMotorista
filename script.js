let selectedStars = 0;

document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    selectedStars = parseInt(star.getAttribute("data-value"));
    updateStars();
  });
});

function updateStars() {
  document.querySelectorAll(".star").forEach(star => {
    const value = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("selected", value <= selectedStars);
  });
}

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const driverName = document.getElementById("driverName").textContent;
  const passengerName = document.getElementById("passengerName").value.trim();
  const date = document.getElementById("date").value;
  const feedback = document.getElementById("feedback").value.trim();

  if (!passengerName || !date || selectedStars === 0) {
    alert("Preencha todos os campos e selecione as estrelas.");
    return;
  }

  const message = `Olá ${driverName}, você recebeu uma nova avaliação:%0A
🧍 Passageiro: ${passengerName}%0A
📅 Data: ${date}%0A
⭐ Avaliação: ${selectedStars} estrela(s)%0A
📝 Feedback: ${feedback || "Nenhum"}%0A`;

  const phone = "5527992340625"; // Substitua pelo número do motorista (com DDD e sem espaços)
  const url = `https://wa.me/${phone}?text=${encodeURI(message)}`;

  window.open(url, "_blank");
});
