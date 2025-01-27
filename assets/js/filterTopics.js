document.addEventListener("DOMContentLoaded", function () {
  const langueSelect = document.getElementById("langue");
  const categorySelect = document.getElementById("category");
  const statusSelect = document.getElementById("status");

  if (langueSelect && categorySelect && statusSelect) {
    langueSelect.addEventListener("change", () => {
      filtreTopics(
        langueSelect.value,
        categorySelect.value,
        statusSelect.value
      );
    });

    categorySelect.addEventListener("change", () => {
      filtreTopics(
        langueSelect.value,
        categorySelect.value,
        statusSelect.value
      );
    });

    statusSelect.addEventListener("change", () => {
      filtreTopics(
        langueSelect.value,
        categorySelect.value,
        statusSelect.value
      );
    });
  }

  function filtreTopics(langue, category, status) {
    const topics = document.querySelectorAll("tr[data-status]");

    topics.forEach((topic) => {
      if (
        (category === topic.dataset.category || category === "all") &&
        (langue === topic.dataset.langue || langue === "all") &&
        (status === topic.dataset.status || status === "all")
      ) {
        topic.classList.remove("hidden");
      } else {
        topic.classList.add("hidden");
      }
    });
  }
});
