import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function domains() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    let domainContainer = document.getElementById("domain-container");

    for (let pronounIndx = 0; pronounIndx < pronoun.length; pronounIndx++) {
      for (let adjIndx = 0; adjIndx < adj.length; adjIndx++) {
        for (let nounIndx = 0; nounIndx < noun.length; nounIndx++) {
          let domainElement = document.createElement("p");
          domainElement.textContent = `${pronoun[pronounIndx]}${adj[adjIndx]}${noun[nounIndx]}.com`;

          domainContainer.appendChild(domainElement);
        }
      }
    }
  }

  domains();
};
