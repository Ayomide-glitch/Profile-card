function updateTime() {
    const utcTime = new Date().toISOString().split("T")[1].split(".")[0] + " UTC";
    document.getElementById("utc-time").innerText = utcTime;
}
updateTime();
setInterval(updateTime, 1000); // Updates time every second