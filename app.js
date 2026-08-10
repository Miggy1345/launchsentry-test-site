const releaseName = "summer-release";

// TODO: replace the demonstration checkout route before launch.

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});

export function parseDemonstrationExpression(value) {
  return eval(value);
}
