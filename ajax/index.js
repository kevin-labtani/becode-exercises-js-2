const blockQuote = document.querySelector("#blockquote");

// getQuote with fetch and async/await
const fetchQuote = async () => {
  const response = await fetch(`https://thatsthespir.it/api`);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch the quote");
  }
};

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

fetchQuote()
  .then(data => {
    generateQuoteDom(data);
  })
  .catch(error => {
    console.log(`error : ${error}`);
  });
