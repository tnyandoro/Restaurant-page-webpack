(()=>{"use strict";var e=function(e){var t=document.createElement("p");return t.textContent=e,t};const t=function(){var t=document.getElementById("main");t.textContent="",t.appendChild(function(){var t=document.createElement("div");t.classList.add("landing");var n=document.createElement("img");return n.src="images/logo.png",n.alt="KAICO",t.appendChild(n),t.appendChild(e("A fusion of Greek Flavours, tradition and home based generosity")),t.appendChild(e("Greek Flavours delivered straight to your doorstep")),t.appendChild(e("Greek Flavours delivered straight to your doorstep")),t}())};var n=function(e,t){var n=document.createElement("div");n.classList.add("menu-item");var a=document.createElement("h2");a.textContent=e;var d=document.createElement("p");d.textContent=t;var i=document.createElement("img");return i.src="images/menu/".concat(e.toUpperCase(),".png"),i.alt="".concat(e),n.appendChild(i),n.appendChild(a),n.appendChild(d),n};var a=function(e,t){var n=document.createElement("div");n.classList.add("drinks-item");var a=document.createElement("h2");a.textContent=e;var d=document.createElement("p");d.textContent=t;var i=document.createElement("img");return i.src="images/drinks/".concat(e.toLowerCase(),".jpg"),i.alt="".concat(e),n.appendChild(i),n.appendChild(a),n.appendChild(d),n};var d,i,o=function(){var e=document.createElement("nav"),d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Home",d.addEventListener("click",(function(e){e.target.classList.contains("active")||(r(d),t())}));var i=document.createElement("button");i.classList.add("button-nav"),i.textContent="Menu",i.addEventListener("click",(function(e){var t;e.target.classList.contains("active")||(r(i),(t=document.getElementById("main")).textContent="",t.appendChild(function(){var e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Meze","Hummus with Spicy Lamb Mince With pine kernels and served with pita bread")),e.appendChild(n("Dipneat","Mini Trio of Dips Choice of 3 mini dips. Served with grissini bread.")),e.appendChild(n("Potatochips","Family Size Potato Chips")),e.appendChild(n("Pavlova","Tomatoes, cucumber, red onion, olives and feta.")),e.appendChild(n("Calamari","3 Skewers served with chips, pita bread, chopped tomato, red onion and your choice of dip.")),e.appendChild(n("Chicken_full","10 Piece chicken. Drumsticks and thighs coal-grilled with olive oil, oregano and fresh lemon. Served with chips")),e}()))}));var o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Drinks",o.addEventListener("click",(function(e){var t;e.target.classList.contains("active")||(r(o),(t=document.getElementById("main")).textContent="",t.appendChild(function(){var e=document.createElement("div");return e.classList.add("drinks"),e.appendChild(a("fruit","Orange, PineApple, Mango, Pasion fruit, Apple")),e.appendChild(a("fizzy_drinks","Coke, Fantas, lemonade, Apple.")),e.appendChild(a("coak_tails","Passon Fruit, Orange n Mango")),e.appendChild(a("lager","Balck label, Heinken, Budbeer.")),e.appendChild(a("winery","Sweet red, sweet white, Dry red, sweet red.")),e.appendChild(a("hot","Cappacino, Latte, Coffee, Tea, Hot Chocolate")),e}()))}));var c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="Contact",c.addEventListener("click",(function(e){var t;e.target.classList.contains("active")||(r(c),(t=document.getElementById("main")).textContent="",t.appendChild(function(){var e=document.createElement("div");e.classList.add("contact");var t=document.createElement("p");t.textContent=" Phone: +27 246 123 0987";var n=document.createElement("p");return n.textContent="Address: 39 Troupant Ave 2191, Magelissig, johannesburg, Gauteng, South Africa",e.appendChild(t),e.appendChild(n),e}()))})),e.appendChild(d),e.appendChild(i),e.appendChild(o),e.appendChild(c),e},r=function(e){document.querySelectorAll(".button-nav").forEach((function(e){void 0!==e&&e.classList.remove("active")})),e.classList.add("active")};(i=document.getElementById("content")).appendChild(function(){var e=document.createElement("header");e.classList.add("header");var t=document.createElement("h1");return t.classList.add("Place-Name"),t.textContent="KaiCoco",e.appendChild(t),e.appendChild(o()),e}()),i.appendChild(((d=document.createElement("main")).classList.add("main"),d.setAttribute("id","main"),d)),i.appendChild(function(){var e=document.createElement("footer");e.classList.add("footer");var t=document.createElement("p");t.textContent="Copyright © 2021 KAICOCO";var n=document.createElement("a");n.href="https://github.com/tnyandoro";var a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),r(document.querySelector(".button-nav")),t()})();
//# sourceMappingURL=main.js.map