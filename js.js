var time = document.createElement('time');
time.classList.add('clock');
var hour = document.createElement('span');
hour.classList.add('clock__hand');
hour.classList.add('clock__hand--hour');
var minute = document.createElement('span');
minute.classList.add('clock__hand');
minute.classList.add('clock__hand--minute');
var second = document.createElement('span');
second.classList.add('clock__hand');
second.classList.add('clock__hand--second');
time.prepend(hour);
time.prepend(minute);
time.prepend(second);
document.querySelectorAll('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-9.MuiGrid-grid-lg-9 > div > div')[1].prepend(time);


var date = new Date(),
	  hours = date.getHours(),
	  minutes = date.getMinutes(),
	  seconds = date.getSeconds();

if (hours > 12) {
  hours -= 12;
}

var secondsStartDegree = 360 / 60 * seconds,
	  minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
	  hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;

var style = document.createElement('style');

style.type = 'text/css';
style.innerHTML = '\
.clock {box-shadow: inset 0 0 0 0.02em #83848f;display: inline-block;border-radius: 0.5em;position: relative;font-size: 150px;overflow: hidden;height: 1em;width: 1em;}.clock::after {content: "";background-color: #fff;border-radius: 0.5em;margin-left: -0.5em;margin-top: -0.5em;position: absolute;font-size: 0.01em;display: block;height: 1em;width: 1em;left: 50%;top: 50%;}.clock__hand-container, .clock__hand {margin-left: -0.5em;margin-top: -0.5em;font-size: inherit;position: absolute;display: block;height: 1em;width: 1em;left: 50%;top: 50%;}.clock__hand--hour::after {content: "";background-color: #83848f;margin-bottom: -0.02em;margin-left: -0.01em;font-size: inherit;position: absolute;display: block;height: 0.25em;width: 0.02em;bottom: 50%;left: 50%;}.clock__hand--minute::after {content: "";background-color: #83848f;margin-bottom: -0.02em;margin-left: -0.01em;font-size: inherit;position: absolute;display: block;height: 0.4em;width: 0.02em;bottom: 50%;left: 50%;}.clock__hand--second::after {content: "";background-color: #4e6baf;margin-bottom: -0.02em;margin-left: -0.005em;font-size: inherit;position: absolute;display: block;height: 0.46em;width: 0.01em;bottom: 50%;left: 50%;}\
@keyframes clock-hand-rotate--hour {\
  from {transform: rotate(' + hoursStartDegree + 'deg)}\
  to {transform: rotate(' + (hoursStartDegree + 360) + 'deg)}\
}\
@keyframes clock-hand-rotate--minute {\
  from {transform: rotate(' + minutesStartDegree + 'deg)}\
  to {transform: rotate(' + (minutesStartDegree + 360) + 'deg)}\
}\
@keyframes clock-hand-rotate--second {\
  from {transform: rotate(' + secondsStartDegree + 'deg)}\
  to {transform: rotate(' + (secondsStartDegree + 360) + 'deg)}\
}\
.clock__hand--hour {\
  animation: clock-hand-rotate--hour 43200s linear infinite;\
}\
.clock__hand--minute {\
  animation: clock-hand-rotate--minute 3600s linear infinite;\
}\
.clock__hand--second {\
  animation: clock-hand-rotate--second 60s linear infinite;\
}';

document.getElementsByTagName('head')[0].appendChild(style);