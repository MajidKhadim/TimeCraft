let date = Date.now();
let curr_date = new Date(date);
const root = document.documentElement;
    document.addEventListener("DOMContentLoaded", function (event) {
    let secs = curr_date.getSeconds();
    let mins = curr_date.getMinutes();
    let hours = curr_date.getHours();
    root.style.setProperty('--secs-deg', `${secs * 6}deg`);
    root.style.setProperty('--mins-deg', `${mins * 6}deg`);
    root.style.setProperty('--hours-deg', `${hours * 30}deg`);
    update_time();
  });
  let digital_time = document.getElementsByClassName('digital-time');
  function update_time() {
    date= Date.now();
    curr_date = new Date(date);
    let hours = curr_date.getHours()%12 < 10 ? '0' + curr_date.getHours()%12 : curr_date.getHours()%12;
    let min = curr_date.getMinutes() < 10 ? '0' + curr_date.getMinutes() : curr_date.getMinutes();
    let sec = curr_date.getSeconds() < 10 ? '0' + curr_date.getSeconds() : curr_date.getSeconds();
    if(min < 1){
      root.style.setProperty('--secs-deg', `${sec * 6}deg`);
      root.style.setProperty('--mins-deg', `${min * 6}deg`);
      root.style.setProperty('--hours-deg', `${hours * 30}deg`);
    }
    digital_time[0].innerHTML = `${hours} : ${min} : ${sec}`;
  }
  setInterval(() => {
    update_time();
  }, 1000);
