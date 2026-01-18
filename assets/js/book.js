function responsiveSection() {
  const zone = document.getElementById("book-header");
  if (window.innerWidth > 799) {
    zone.innerHTML = `Book an appointment`;
  } else {
    zone.innerHTML = `Book`;
  }
}
responsiveSection();
window.addEventListener("resize", responsiveSection);
