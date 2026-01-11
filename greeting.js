document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  let text;
  if (hour >= 5 && hour <= 11) {
    text = "Selamat Pagi";
  } else if (hour <= 14) {
    text = "Selamat Siang";
  } else if (hour <= 17) {
    text = "Selamat Sore";
  } else {
    text = "Selamat Malam";
  }

  greeting.textContent = text;
});
