document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      document
        .querySelectorAll(".accordion-content")
        .forEach((item) => (item.style.maxHeight = null));
      document
        .querySelectorAll(".icon")
        .forEach((item) => (item.style.transform = "rotate(0deg)"));

      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});
