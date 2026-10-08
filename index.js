let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let current_time = document.querySelector("#date");
let am_pm = document.querySelector("#ampm");



setInterval(function () {

  let date = new Date();
  if (date.getHours() >= 0 && date.getHours() <= 9)
    hours.textContent = "0" + date.getHours();



  if (date.getHours() >= 12) {

    hours.textContent = date.getHours() - 12;
    am_pm.textContent = "PM";
  }

  else
    am_pm.textContent = "AM";


  if (date.getMinutes() >= 0 && date.getMinutes() <= 9)
    minutes.textContent = "0" + date.getMinutes();
  else
    minutes.textContent = date.getMinutes();


  if (date.getSeconds() >= 0 && date.getSeconds() <= 9)
    seconds.textContent = "0" + date.getSeconds();
  else
    seconds.textContent = date.getSeconds();


  let current_date = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let current_month = months[date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let current_day = days[date.getDay()];
  let current_year = date.getFullYear();
  current_time.innerHTML = `<p
                    id="date"
                    class="text-sm md:text-base
                           text-indigo-400
                           tracking-[0.25em]
                           uppercase font-semibold">
                    ${current_day} • ${current_month} ${current_date} • ${current_year}
                </p>`
}, 1000);