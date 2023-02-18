const time = document.querySelector('.time');
time.innerHTML = "Watch Out"

var interval;
const timer=() => {
    const d = new Date();
    time.innerHTML = d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
}

interval = setInterval(timer, 1000);
const pauseB = document.querySelector('.pause');
const resumeB = document.querySelector('.resume');

pauseB.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('pause clicked');
    const timeNow = time.innerHTML;
    clearInterval(interval);
    time.innerHTML = timeNow;
})

resumeB.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(interval);
    console.log('resume clicked');
    interval = setInterval(timer, 1000);
})
