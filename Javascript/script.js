function updateclock() {
    const now=new Date();
    const weekday=now.toLocaleDateString('en-US',{weekday:'long'});
    const fullDate=now.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    const hours=now.getHours().toString().padStart(weekday,'0')
    const minutes=now.getMinutes().toString().padStart(weekday,'0')
    const time=`${hours}:${minutes}`
    document.getElementById('clock').textContent=`${weekday},${fullDate}, ${time}`
}
setInterval(updateclock,1000);
updateclock();