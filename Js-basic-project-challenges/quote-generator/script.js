const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// GET QUOTE FROM API and STORE HERE
let apiQuote = [];

// Show LOADING SPINNER
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide LOADING SPINNER
function hideLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// GET NEW QUOTE

function getNewQuote() {
  showLoadingSpinner();
  const { text, author } =
    apiQuote[Math.floor(Math.random() * apiQuote.length)];
  quoteText.textContent = text;
  authorText.textContent = author || "Unkown";

  text.length > 120
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");

  hideLoadingSpinner();
}

async function initQuote() {
  showLoadingSpinner();
  // Get quotes responses
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();

    // Get random quote
    getNewQuote();
  } catch (error) {
    console.log(error.message);
  }
}

initQuote();

newQuoteBtn.addEventListener("click", getNewQuote);
