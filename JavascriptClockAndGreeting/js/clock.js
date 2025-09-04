function showTime() {
    const myName = document.querySelector("#myName");
    const name = prompt("Lütfen adınızı giriniz:");
    myName.innerHTML = name ? name : "Ziyaretçi";

    function updateClock() {
      const now = new Date();
      let h = String(now.getHours()).padStart(2, "0");
      let m = String(now.getMinutes()).padStart(2, "0");
      let s = String(now.getSeconds()).padStart(2, "0");

      //Day Names
      const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];

      const dayName = days[now.getDay()];

      const timeString = `${h}:${m}:${s} ${dayName}`;
      document.querySelector("#myClock").innerHTML = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);

}
window.onload = showTime;

