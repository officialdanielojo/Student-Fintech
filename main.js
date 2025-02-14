function calculateSavings() {
  const goal = parseFloat(document.getElementById("goal").value);
  const months = parseFloat(document.getElementById("months").value);
  const monthlySavings = goal / months;
  document.getElementById(
    "result"
  ).innerText = `You need to save #${monthlySavings.toFixed(2)} per month.`;
}
