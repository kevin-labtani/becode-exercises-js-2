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

// getQuote with fetch and async/await
const fetchQuote = async () => {
  const response = await fetch(`https://thatsthespir.it/api`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch the quote");
  }
};

fetchQuote()
  .then(data => {
    generateQuoteDom(data);
  })
  .catch(error => {
    console.log(`error : ${error}`);
  });
