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
const datasss = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 2267258,
    market_cap: 43877075845537,
    market_cap_rank: 1,
    fully_diluted_valuation: 47609753031393,
    total_volume: 1218008591976,
    high_24h: 2283131,
    low_24h: 2231565,
    price_change_24h: -15872.458560250234,
    price_change_percentage_24h: -0.69521,
    market_cap_change_24h: -305567555088.9844,
    market_cap_change_percentage_24h: -0.6916,
    circulating_supply: 19353568,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 5128383,
    ath_change_percentage: -55.85533,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 3993.42,
    atl_change_percentage: 56590.96161,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:16.597Z",
    price_change_percentage_24h_in_currency: -0.6952057905324914,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 154041,
    market_cap: 18550038778401,
    market_cap_rank: 2,
    fully_diluted_valuation: 18550038778401,
    total_volume: 813515176895,
    high_24h: 154630,
    low_24h: 151024,
    price_change_24h: -454.8611330042477,
    price_change_percentage_24h: -0.29442,
    market_cap_change_24h: -40851806590.38281,
    market_cap_change_percentage_24h: -0.21974,
    circulating_supply: 120414184.245026,
    total_supply: 120414184.245026,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -57.53582,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 546850.82627,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 89.89893586331821,
      currency: "btc",
      percentage: 8989.893586331822,
    },
    last_updated: "2023-04-22T18:55:17.609Z",
    price_change_percentage_24h_in_currency: -0.2944159363340179,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 38.72,
    market_cap: 2003626950541,
    market_cap_rank: 6,
    fully_diluted_valuation: 3871682271072,
    total_volume: 99487528813,
    high_24h: 38.96,
    low_24h: 36.28,
    price_change_24h: 1.19,
    price_change_percentage_24h: 3.16271,
    market_cap_change_24h: 62544387197,
    market_cap_change_percentage_24h: 3.22214,
    circulating_supply: 51750810378,
    total_supply: 99988998998,
    max_supply: 100000000000,
    ath: 215.1,
    ath_change_percentage: -82.02045,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.159343,
    atl_change_percentage: 24171.43098,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:21.790Z",
    price_change_percentage_24h_in_currency: 3.1627071501207276,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 1782.57,
    market_cap: 699874763531,
    market_cap_rank: 11,
    fully_diluted_valuation: 973136882249,
    total_volume: 30331049506,
    high_24h: 1794.44,
    low_24h: 1732.44,
    price_change_24h: -6.159128413435155,
    price_change_percentage_24h: -0.34433,
    market_cap_change_24h: -1442502695.718872,
    market_cap_change_percentage_24h: -0.20568,
    circulating_supply: 392638095.01961,
    total_supply: 545941404.876299,
    max_supply: null,
    ath: 19286.66,
    ath_change_percentage: -90.78075,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 38.03,
    atl_change_percentage: 4576.0091,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-04-22T18:55:14.936Z",
    price_change_percentage_24h_in_currency: -0.34432923830031575,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 27135,
    market_cap: 4286406719608,
    market_cap_rank: 4,
    fully_diluted_valuation: 5429739328342,
    total_volume: 18731241277,
    high_24h: 27160,
    low_24h: 26095,
    price_change_24h: 403.97,
    price_change_percentage_24h: 1.51123,
    market_cap_change_24h: 69232021386,
    market_cap_change_percentage_24h: 1.64167,
    circulating_supply: 157886280,
    total_supply: 157900174,
    max_supply: 200000000,
    ath: 50351,
    ath_change_percentage: -46.12066,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 2.58,
    atl_change_percentage: 1049475.68666,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:17.074Z",
    price_change_percentage_24h_in_currency: 1.5112303909747045,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 6.59,
    market_cap: 916155907282,
    market_cap_rank: 9,
    fully_diluted_valuation: null,
    total_volume: 58370444961,
    high_24h: 6.75,
    low_24h: 6.37,
    price_change_24h: -0.14030570862824732,
    price_change_percentage_24h: -2.08402,
    market_cap_change_24h: -19632392647.198242,
    market_cap_change_percentage_24h: -2.09795,
    circulating_supply: 139046926383.705,
    total_supply: null,
    max_supply: null,
    ath: 53.62,
    ath_change_percentage: -87.75018,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.00552883,
    atl_change_percentage: 118696.76685,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:13.286Z",
    price_change_percentage_24h_in_currency: -2.0840200217544744,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    current_price: 32.5,
    market_cap: 1138872982256,
    market_cap_rank: 7,
    fully_diluted_valuation: 1462384184323,
    total_volume: 28502984412,
    high_24h: 32.75,
    low_24h: 31.22,
    price_change_24h: 0.382127,
    price_change_percentage_24h: 1.18987,
    market_cap_change_24h: 14906311861,
    market_cap_change_percentage_24h: 1.32622,
    circulating_supply: 35045020830.3234,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 225.26,
    ath_change_percentage: -85.5795,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 1.38,
    atl_change_percentage: 2261.75336,
    atl_date: "2017-11-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:13.957Z",
    price_change_percentage_24h_in_currency: 1.189870032047186,
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
    current_price: 587.61,
    market_cap: 303785153746,
    market_cap_rank: 21,
    fully_diluted_valuation: 587478574062,
    total_volume: 21424392152,
    high_24h: 598.42,
    low_24h: 577.58,
    price_change_24h: -10.812338414091982,
    price_change_percentage_24h: -1.8068,
    market_cap_change_24h: -4791015981.487793,
    market_cap_change_percentage_24h: -1.55262,
    circulating_supply: 517099971.2305644,
    total_supply: 1000000000,
    max_supply: 1000000000,
    ath: 3862.15,
    ath_change_percentage: -84.81899,
    ath_date: "2021-05-10T00:13:57.214Z",
    atl: 9.55,
    atl_change_percentage: 6041.55823,
    atl_date: "2017-11-29T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:20.630Z",
    price_change_percentage_24h_in_currency: -1.8068044535764396,
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
    current_price: 488.76,
    market_cap: 598333747101,
    market_cap_rank: 12,
    fully_diluted_valuation: 637903157381,
    total_volume: 13036598865,
    high_24h: 490.1,
    low_24h: 475.77,
    price_change_24h: 0.557968,
    price_change_percentage_24h: 0.11429,
    market_cap_change_24h: 1325441073,
    market_cap_change_percentage_24h: 0.22201,
    circulating_supply: 1224091113.52131,
    total_supply: 1305043531.33986,
    max_supply: null,
    ath: 4095.22,
    ath_change_percentage: -88.0833,
    ath_date: "2021-11-04T14:10:09.301Z",
    atl: 202.26,
    atl_change_percentage: 141.28448,
    atl_date: "2020-08-19T03:44:11.556Z",
    roi: null,
    last_updated: "2023-04-22T18:55:15.017Z",
    price_change_percentage_24h_in_currency: 0.11429082334579937,
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
    image:
      "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157",
    current_price: 7.85,
    market_cap: 209923823648,
    market_cap_rank: 28,
    fully_diluted_valuation: 392207434213,
    total_volume: 4819856903,
    high_24h: 7.84,
    low_24h: 7.58,
    price_change_24h: 0.02575193,
    price_change_percentage_24h: 0.32932,
    market_cap_change_24h: 945982037,
    market_cap_change_percentage_24h: 0.45267,
    circulating_supply: 26762793050.3303,
    total_supply: 50001787373.2529,
    max_supply: 50001787373.2529,
    ath: 58.01,
    ath_change_percentage: -86.51457,
    ath_date: "2021-05-16T09:48:45.220Z",
    atl: 0.02966141,
    atl_change_percentage: 26272.69097,
    atl_date: "2015-03-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-04-22T18:55:09.121Z",
    price_change_percentage_24h_in_currency: 0.32932398922888506,
  },
];

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
      if (cc.innerText.substring(0, 4) >= 0) {
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
    document.querySelector(".secondary").innerHTML = data;
  });


