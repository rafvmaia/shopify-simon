const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    // Fecha todas as perguntas
    faqQuestions.forEach((q) => {
      q.setAttribute("aria-expanded", "false");
      q.querySelector(".faq-icon").textContent = "+";
      q.nextElementSibling.style.display = "none";
    });

    // Abre a pergunta clicada, se não estava aberta
    if (!isExpanded) {
      question.setAttribute("aria-expanded", "true");
      question.querySelector(".faq-icon").textContent = "–";
      question.nextElementSibling.style.display = "block";
    }
  });
});
