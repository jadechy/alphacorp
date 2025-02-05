document.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById("academy_free");
  const input = document.getElementById("academy_price");
  const label = document.querySelector("label[for='academy_price']");
  const tooglePriceField = () => {
    check.checked
      ? label.classList.add("hidden")
      : label.classList.remove("hidden");
    check.checked
      ? input.classList.add("hidden")
      : input.classList.remove("hidden");
  };
  tooglePriceField();
  check.addEventListener("change", () => tooglePriceField());
});
