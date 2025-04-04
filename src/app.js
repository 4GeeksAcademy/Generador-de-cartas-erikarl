import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = [
        { name: "Diamonds", symbol: "♦", class: "diamonds" },
        { name: "Spades", symbol: "♠", class: "spades" },
        { name: "Hearts", symbol: "♥", class: "hearts" },
        { name: "Clubs", symbol: "♣", class: "clubs" }
    ];

    
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    
    let cardHTML = `
        <div class="suit suit-top ${randomSuit.class}">${randomSuit.symbol}</div>
        <div class="card-value ${randomSuit.class}">${cardNumber[randomCardNumber]}</div>
        <div class="suit suit-bottom ${randomSuit.class}">${randomSuit.symbol}</div>
    `;
    const cardElement = document.getElementById('theCard');
    cardElement.innerHTML = cardHTML;
   
};

