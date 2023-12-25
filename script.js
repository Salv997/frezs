
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');
for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
}
if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
}
}
items.forEach(item => item.addEventListener('click', toggleAccordion));


function changeSlide(index) {
    const screenWidth = window.innerWidth;
    const slider = document.querySelector('.slider');
    if (screenWidth > 767) {
        const translateValue = index * -53;
        slider.style.transform = `translateX(${translateValue}rem)`;
    } else {
        const translateValue = index * -75;
        slider.style.transform = `translateX(${translateValue}vw)`;
    }
}