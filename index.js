let year, month, day;

let today = new URLSearchParams(window.location.search).get("today");

if (today) {
  today = today.replace("-", "");
  year = parseInt(today.substring(0, 4), 10);
  month = parseInt(today.substring(4, 6), 10);
  day = parseInt(today.substring(6, 8), 10);
} else {
  let date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
}

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
