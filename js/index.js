const rows = Array.from(document.querySelectorAll("tr"));
const r = Array.from(document.querySelectorAll("th"));

var main_ida;
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("mySidenav").style.height = "100vh";
  document.getElementById("mySidenav").classList.add("sticky");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("mySidenav").classList.remove("sticky");
}

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
)
  .then((data) => {
    return data.json();
  })
  .then((datas) => {
    let tabledata = "";
    datas.map((values) => {
      tabledata += ` <tr class="profit">
        <td class="imgmain"><img src=${values.image}> <p><a value="${values.id}" href="./coin.html" id="coin_name">${values.name}</a></p></td>
        <td> &#8377 ${values.current_price}</td>
        <td id="tfh">${values.price_change_percentage_24h}%</td>
        <td>${values.market_cap}</td>
        <td>${values.circulating_supply}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tabledata;
    main_ida = document.querySelectorAll("#coin_name");
    main_ida.forEach((elem) => {
      elem.addEventListener("click", () => {
        console.log(elem.innerHTML);
        localStorage.setItem("a", elem.getAttribute("value"));
      });
    });
    setTimeout(() => {
      const colo = document.querySelectorAll("#tfh");
      console.log(colo[1]);
      colo.forEach(setcolo);
    }, 0000);
    
    function setcolo(cc) {
      if (cc.innerText.substring(0, 6) >= 0) {
        cc.style.color = "green";
      } else {
        cc.style.color = "red";
      }
    }
    document.getElementById("loads").style.display="none";
  });


const colo = document.querySelectorAll("tr");
fetch(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=5&page=1&sparkline=false`
)
  .then((data) => {
    return data.json();
  })
  .then((datas) => {
    let data = "";
    datas.map((values) => {
      data += `<div class="topcard">
        <p><img src=${values.image}></p>
        <p>${values.symbol.toUpperCase()} ${values.price_change_percentage_24h.toFixed(
        2
      )}%</p>
        <p>${values.current_price}</p>
        </div>`;
    });
    document.querySelector(".primary").innerHTML = data;
    // document.querySelector(".secondary").innerHTML = data;
  });


