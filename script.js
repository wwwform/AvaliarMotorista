let selectedStars = 0;

// Adiciona eventos de clique a cada estrela
document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    // Pega o valor da estrela clicada (1 a 5)
    selectedStars = parseInt(star.getAttribute("data-value"));

    // Atribui o valor ao campo oculto do formulário
    document.getElementById("starRating").value = selectedStars;

    // Atualiza visualmente as estrelas marcadas
    updateStars();
  });
});

// Função que colore as estrelas até a selecionada
function updateStars() {
  document.querySelectorAll(".star").forEach(star => {
    const value = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("selected", value <= selectedStars);
  });
}
