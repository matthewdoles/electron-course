const path = require('path');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const mem = osu.mem;
const os = osu.os;

let cpuOverload = 80;

// run every two seconds
setInterval(() => {
  // cpu usage
  cpu.usage().then((info) => {
    document.getElementById('cpu-usage').innerText = info + '%';
    let progressBar = document.getElementById('cpu-progress');
    progressBar.style.width = info + '%';
    if (info >= cpuOverload) {
      progressBar.style.background = 'red';
    } else {
      progressBar.style.background = '#30c88b';
    }
  });

  // cpu free
  cpu.free().then((info) => {
    document.getElementById('cpu-free').innerText = info + '%';
  });

  // uptime
  document.getElementById('sys-uptime').innerText = secondsToDHMS(os.uptime());
}, 2000);

// cpu model
document.getElementById('cpu-model').innerText = cpu.model();

// computer name
document.getElementById('comp-name').innerText = os.hostname();

// os
document.getElementById('os').innerText = `${os.type()} ${os.arch()}`;

// total memory
mem
  .info()
  .then(
    (info) => (document.getElementById('mem-total').innerText = info.totalMemMb)
  );

// show days, hours, mins, sec
const secondsToDHMS = (seconds) => {
  seconds = +seconds;
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d, ${h}h, ${m}m, ${s}s`;
};
