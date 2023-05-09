var id;
var main_id;
document.addEventListener("DOMContentLoaded", function () {
  id = localStorage.getItem("a");
  id = id.toLowerCase();
  let day = "1";
  let myChart;
  let ca = (id, day) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${day}`
    )
      .then((data) => {
        return data.json();
      })
      .then((datas) => {
        const ctx = document.getElementById("myChart").getContext("2d");
        myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: Object.keys(datas.prices),
            datasets: [
              {
                label: "price",
                data: Object.values(datas.prices),
              },
            ],
          },
        });
      });
  };
  function da(id, day) {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((datas) => {
        document.title = `${datas.name} Price: Real Time Data`;
        let tabledata = "";
        tabledata = `<div class="sec1_main">
          <div class="half1">
              <p>Rank #${datas.market_cap_rank}</p>
              <div class="name_coin"><img src=${datas.image.small}> ${
          datas.name
        }<span> ${datas.symbol.toUpperCase()}</span></div>
              <div class="price">&#8377 ${
                datas.market_data.current_price.inr
              }<span id="tfh" class="per"> ${datas.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
          2
        )}%</span></div>
              <div class="coin_info">
                  <div><p class="p1">Market Cap:</p><p class="p2">${
                    datas.market_data.market_cap.inr
                  }</p></div>
                  <div><p class="p1">Total Volume:</p><p class="p2">${
                    datas.market_data.total_volume.inr
                  }</p></div>
                  <div><p class="p1">Fully Diluted Valuation:</p><p class="p2">${
                    datas.market_data.fully_diluted_valuation.inr
                  }</p></div>
                  <div><p class="p1">Circulating Supply:</p><p class="p2">${
                    datas.market_data.circulating_supply
                  }</p></div>
                  <div><p class="p1">Total Supply:</p><p class="p2">${
                    datas.market_data.total_supply
                  }</p></div>
                  <div><p class="p1">Max Supply:</p><p class="p2">${
                    datas.market_data.max_supply
                  }</p></div>
               </div>
          </div>
          <div class="half2">
              <div class="divv">INFO</div>
              <div><h5>Homepage:</h5><a href="${
                datas.links.homepage[0]
              }" target="_blank">Official</a></div>
              <div><h5>Blockchain Site:</h5><a href="${
                datas.links.blockchain_site[0]
              }" target="_blank">Site 1</a><a href="${
          datas.links.blockchain_site[1]
        }" target="_blank">Site 2</a><a href="${
          datas.links.blockchain_site[2]
        }" target="_blank">Site 3</a></div>
              <div><h5>Reddit:</h5><a href="${
                datas.links.subreddit_url
              } target="_blank"">SubReddit</a></div>
              <div><h5>Repository:</h5><a href="${
                datas.links.repos_url.github[0]
              }" target="_blank">Repo 1</a><a href="${
          datas.links.repos_url.github[0]
        }" target="_blank">Repo 2</a></div>
              <div><h5>Official Forum:</h5><a href="${
                datas.links.official_forum_url
              }" target="_blank">Forum</a></div>
          </div>
          
      </div>
      <div class="sec2_main">
              <div class="sum_coin">Overview</div>
              <div class="s2_chart">
                  <div class="chart1">
                      <div class="day"><span class="one">24h</span><span class="three">30days</span><span class="tm">3 months</span><span class="om">1year</span></div>
                      <canvas id="myChart" width="3500" height="1748"></canvas>
                  </div>
                  <div class="chart2">
                      <h3>${datas.name} price Statistics</h3>
                      <div><span>${
                        datas.name
                      } Price</span><span class="span">&#8377 ${
          datas.market_data.current_price.inr
        }</span></div>
                      <div><span>24h Low /24h High</span><span class="span">${
                        datas.market_data.low_24h.inr
                      } / ${datas.market_data.high_24h.inr}</span></div>
                      <div><span>Trading Volume</span><span class="span">${
                        datas.market_data.total_volume.inr
                      }</span></div>
                      <div><span>Market Cap Rank</span><span class="span">${
                        datas.market_data.market_cap_rank
                      }</span></div>
                      <div><span>Volume / Market Cap</span><span class="span">${(
                        datas.market_data.total_volume.inr /
                        datas.market_data.market_cap.inr
                      ).toFixed(4)}</span></div>
                      <div><span>All-Time High</span><span class="span">${
                        datas.market_data.ath.inr
                      }</span></div>
                      <div><span>All-Time Low</span><span class="span">${
                        datas.market_data.atl.inr
                      }</span></div>
                  </div>
              </div>
          </div>
      <div class="sec3_main">
          <h1>What is ${datas.name} ?</h1>
          <p class="dis">${datas.description.en}</p>
      </div>`;

        document.getElementById("main_coin").innerHTML = tabledata;

        ca(id, day);
    function setcolo() {
      const cc = document.querySelector("#tfh");
      if (datas.market_data.price_change_percentage_24h_in_currency.inr >= 0) {
        cc.style.color = "green";
      } else {
        cc.style.color = "red";
      }
    }
      setcolo();
        setTimeout(() => {
          let one = document.querySelector(".one");
          let three = document.querySelector(".three");
          let tm = document.querySelector(".tm");
          let om = document.querySelector(".om");

          one.addEventListener("click", () => {
            myChart.destroy();
            da(id, 1);
          });
          three.addEventListener("click", () => {
            myChart.destroy();
            da(id, 30);
          });
          tm.addEventListener("click", () => {
            myChart.destroy();
            da(id, 90);
          });
          om.addEventListener("click", () => {
            myChart.destroy();
            da(id, 365);
          });
        }, 1000);
      });
  }
  da(id, day);
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
