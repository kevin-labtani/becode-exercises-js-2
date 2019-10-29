const blockQuote = document.querySelector("#blockquote");

// getQuote with solo request
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);

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

    generateQuoteDom(data);
  } else if (e.target.readyState === 4) {
    console.log("an error has taken place");
  }
});

request.open("GET", "https://thatsthespir.it/api");
request.send();
