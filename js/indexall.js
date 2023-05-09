// want to do with api then remove the datasss array and add this api  but there are only 10 calls per 30min
let curr = "INR";
let pa = 1;
var main_id;
function da(curr, pa) {
  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=100&page=${pa}&sparkline=false`
  )
    .then((data) => {
      return data.json();
    })
    .then((datas) => {
      let tabledata = "";
      datas.map((values) => {
        tabledata += ` <tr class="profit">
                <td>${values.market_cap_rank}</td>
                <td class="imgmain"><img src=${
                  values.image
                }> <p><a value="${values.id}" href="./coin.html" id="coin_name">${values.name}</a></p></td>
                <td>${values.symbol.toUpperCase()}</td>
                <td> &#8377 ${values.current_price}</td>
                <td id="tfh">${values.price_change_percentage_24h}%</td>
                <td>${values.market_cap}</td>
                <td>${values.circulating_supply}</td>
              </tr>`;
      });
      document.getElementById("table_bodyall").innerHTML = tabledata;
      main_id = document.querySelectorAll("#coin_name");
      main_id.forEach((elem) => {
        elem.addEventListener("click", () => {
          localStorage.setItem('a', elem.getAttribute("value"));
        });
      });
      setTimeout(() => {
        const colo = document.querySelectorAll("#tfh");
        console.log(colo[1]);
        colo.forEach(setcolo);
      }, 0000);
      function setcolo(cc) {
        if (cc.innerText.substring(0, 4) >= 0) {
          cc.style.color = "green";
        } else {
          cc.style.color = "red";
        }
      }
      document.querySelector(".load_main").style.display="none"; 
    }); 
}
da(curr, pa);
var b1 = document.querySelector(".btn1");
var b2 = document.querySelector(".btn2");
b1.addEventListener("click", () => {
  if (pa >= 1) {
    pa = pa - 1;
    da(curr, pa);
    console.log("back" + pa);
  }
});

b2.addEventListener("click", () => {
  pa = pa + 1;
  da(curr, pa);
  console.log("front" + pa);
});
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
