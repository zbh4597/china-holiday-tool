let date = new Date();
let today =
  new URLSearchParams(window.location.search).get("today") ||
  "" + date.getFullYear() + (date.getMonth() + 1) + date.getDate();
today = today.replace("-", "");

let year = today.substring(0, 4);
let month = today.substring(4, 6);
let day = today.substring(6, 8);

function reqListener() {
  console.log(this.responseText);
  let data = JSON.parse(this.responseText);
  let dayData = data[month - 1][day - 1];
  document.write(dayData.holiday || dayData.saturday || dayData.sunday);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "china-holidays-" + year + ".json", false);
oReq.send();
