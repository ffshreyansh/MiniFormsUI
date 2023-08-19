const quotes = document.querySelectorAll('.quote');
let currentIndex = 0;

function showQuote(index) {
  quotes.forEach((quote, i) => {
    if (i === index) {
      quote.style.display = 'block';
    } else {
      quote.style.display = 'none';
    }
  });
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
}

function prevQuote() {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentIndex);
}

// Initialize
showQuote(currentIndex);

// Add event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', nextQuote);
document.getElementById('prevButton').addEventListener('click', prevQuote);