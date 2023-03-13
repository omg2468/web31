// select the banner and close button elements
const banner = document.getElementById("banner-popup");
const closeBtn = document.getElementById("close-btn");

// add a click event listener to the close button
closeBtn.addEventListener("click", function () {
  banner.style.display = "none";
});

// set the style properties for the banner popup
banner.style.display = "block";
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.backgroundColor = "#f1c40f";
banner.style.color = "#333";
banner.style.textAlign = "center";
banner.style.padding = "10px";

// add the banner to the body of the HTML page
document.body.appendChild(banner);
