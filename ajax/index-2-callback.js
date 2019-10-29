// return data won't work as we're inside of the "child function" in the event listener rather than the getPuzzle() function
// creating a variable before this and assigning it a value here and then returning it outside of this child function won't work either as it takes too much time to get the data from the api and so we'll return an undefined value
// instead we use a callback function

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

// getQuote with callback
const getQuote = callback => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback("an error has taken place", undefined);
    }
  });

  request.open("GET", "https://thatsthespir.it/api");
  request.send();
};

getQuote((error, data) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    generateQuoteDom(data);
  }
});
