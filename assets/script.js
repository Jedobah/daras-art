document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    document.querySelectorAll(".work").forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.cat === filter ? "block" : "none";
    });
  });
});

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("contact") !== "1") return;

  const target = document.querySelector("#formulaire-contact");

  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 800);
});
