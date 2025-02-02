const UTC_TIME = document.querySelector(".utc-time");
document.addEventListener("DOMContentLoaded", function () {
  const utcTime = new Date().toISOString().split(".")[0] + " UTC";
  UTC_TIME.textContent = utcTime;
});
