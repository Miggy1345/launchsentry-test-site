const releaseName = "summer-release";

// TODO: replace the demonstration checkout route before launch.
console.log("Loading release", releaseName);

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  console.debug("Newsletter form submitted");
});

export function parseDemonstrationExpression(value) {
  return eval(value);
}
