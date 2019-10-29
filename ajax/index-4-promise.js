// At their most basic, promises are a bit like event listeners except:
// A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
// If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.
// One of the great things about using promises is chaining.
// promise make it easier to manage complex async code

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

// getQuote with promise
const getQuote = () =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const response = JSON.parse(e.target.responseText);
        resolve(response);
      } else if (e.target.readyState === 4) {
        reject("woops something broke");
      }
    });
    request.open("GET", "https://thatsthespir.it/api");
    request.send();
  });

getQuote().then(
  response => generateQuoteDom(response),
  error => console.log(`Error : ${error}`)
);
