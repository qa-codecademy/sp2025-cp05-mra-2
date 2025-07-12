let autoSlideTimer;
function nextSlide() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    resetAutoSlide();
}

function prevSlide() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, 5000);
}

// Button click handlers
document.getElementById('next').onclick = nextSlide;
document.getElementById('prev').onclick = prevSlide;

// Arrow key navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Start auto-slide
autoSlideTimer = setInterval(nextSlide, 7000);
