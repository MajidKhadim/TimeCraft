var date = Date.now();
  var curr_date = new Date(date);
  document.addEventListener("DOMContentLoaded", function (event) {
    const root = document.documentElement;
    var secs = curr_date.getSeconds();
    var mins = curr_date.getMinutes();
    var hours = curr_date.getHours();
    root.style.setProperty('--secs-deg', `${secs * 6}deg`);
    root.style.setProperty('--mins-deg', `${mins * 6}deg`);
    root.style.setProperty('--hours-deg', `${hours * 30}deg`);
    update_time();
  });
  var digital_time = document.getElementsByClassName('digital-time');
  function update_time() {
    date= Date.now();
    curr_date = new Date(date);
    let hours = curr_date.getHours()%12 < 10 ? '0' + curr_date.getHours()%12 : curr_date.getHours()%12;
    let min = curr_date.getMinutes() < 10 ? '0' + curr_date.getMinutes() : curr_date.getMinutes();
    let sec = curr_date.getSeconds() < 10 ? '0' + curr_date.getSeconds() : curr_date.getSeconds();

    digital_time[0].innerHTML = `${hours} : ${min} : ${sec}`;
  }
  setInterval(() => {
    update_time();
  }, 1000);
