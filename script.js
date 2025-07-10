const quotes = [
  "Believe in yourself!",
  "Every moment is a fresh beginning.",
  "Never regret anything that made you smile.",
  "Do what you can with what you have.",
  "Dream big. Start small. Act now."
];

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[index];
}
