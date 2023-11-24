

/* GLOBAL - Creating header title */
const header = document.querySelector('#header');
const headerTitle = document.createElement('h1');
headerTitle.classList.add('pageTitle');
headerTitle.textContent = "The Odin Project - Activities";
header.appendChild(headerTitle);

/* GLOBAL - Creating navbar and links */
const nav = document.createElement('div');
nav.classList.add("container", "main", "nav");
header.appendChild(nav);

let link1 = document.createElement('a');
link1.setAttribute("href", "index.html");
link1.textContent = "Home";
nav.appendChild(link1);

let link2 = document.createElement('a');
link2.setAttribute("href", "shopping-list.html");
link2.textContent = "Shopping List";
nav.appendChild(link2);

let link3 = document.createElement('a');
link3.setAttribute("href", "rock-paper-scissors.html");
link3.textContent = "Rock Paper Scissors";
nav.appendChild(link3);

let link4 = document.createElement('a');
link4.setAttribute("href", "etch-a-sketch.html");
link4.textContent = "Etch-a-Sketch";
nav.appendChild(link4);

let link5 = document.createElement('a');
link5.setAttribute("href", "calculator.html");
link5.textContent = "Calculator";
nav.appendChild(link5);

let link6 = document.createElement('a');
link6.setAttribute("href", "form.html");
link6.textContent = "HTML Form";
nav.appendChild(link6);

let link7 = document.createElement('a');
link7.setAttribute("href", "library.html");
link7.textContent = "Library";
nav.appendChild(link7);

let link8 = document.createElement('a');
link8.setAttribute("href", "ticTacToe.html");
link8.textContent = "Tic-tac-toe";
nav.appendChild(link8);