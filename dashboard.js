window.addEventListener("DOMContentLoaded", ()=>{
    updateQuote()
    updateQuote1()
})

async function updateQuote() {
    // Fetch a random quote from the Quotable API
    let quotes = document.getElementById("quotes")
    let author = document.getElementById("author")
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quotes.textContent = data.content;
      author.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  async function updateQuote1() {
    // Fetch a random quote from the Quotable API
    let quotes = document.getElementById("quotes")
    let author = document.getElementById("author")
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quotes1.textContent = data.content;
      author1.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
