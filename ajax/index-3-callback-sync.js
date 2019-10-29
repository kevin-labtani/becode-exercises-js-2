// synchronous version
// <input type="checkbox" />check<br />

const blockQuote = document.querySelector("#blockquote");

// generate & populate quote DOM tree
const generateQuoteDom = data => {
  const parag = document.createElement("p");
  parag.innerHTML = data.quote;
  blockQuote.appendChild(parag);
  const citeParag = document.createElement("p");
  blockQuote.appendChild(citeParag);
  const cite = document.createElement("cite");
  cite.innerHTML = data.author;
  citeParag.appendChild(cite);
};

const getQuoteSync = () => {
  const request = new XMLHttpRequest();

  // false forces the code to wait for a response
  request.open("GET", "https://thatsthespir.it/api", false);
  request.send();

  // we no longer depend on an event listener
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data;
  } else if (request.readyState === 4) {
    throw new console.error("things did not go well");
  }
};

const quote = getQuoteSync();

generateQuoteDom(quote);
