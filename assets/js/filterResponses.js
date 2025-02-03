document.addEventListener("DOMContentLoaded", function () {
  const statusFilter = document.getElementById("status");

  if (statusFilter) {
    statusFilter.addEventListener("change", () => {
      filterResponses(statusFilter.value);
    });
  } else {
    return;
  }
  function filterResponses(filterValue) {
    // Récupérez toutes les lignes du tableau
    const rows = document.querySelectorAll("tr[data-status]");

    rows.forEach((row) => {
      const rowStatus = row.dataset.status;

      // Montrez ou cachez les lignes en fonction du filtre
      if (filterValue === "all" || filterValue === rowStatus) {
        row.classList.remove("hidden");
      } else {
        row.classList.add("hidden");
      }
    });
  }
});
