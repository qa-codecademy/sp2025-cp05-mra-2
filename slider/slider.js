// English Slider
let enAutoSlideTimer;

function nextSlideEn() {
    let lists = document.querySelectorAll('#slide .item');
    document.getElementById('slide').appendChild(lists[0]);
    resetAutoSlideEn();
}

function prevSlideEn() {
    let lists = document.querySelectorAll('#slide .item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    resetAutoSlideEn();
}

function resetAutoSlideEn() {
    clearInterval(enAutoSlideTimer);
    enAutoSlideTimer = setInterval(nextSlideEn, 7000);
}

// German Slider
let deAutoSlideTimer;

function nextSlideDe() {
    let lists = document.querySelectorAll('#slide-german .item-german');
    document.getElementById('slide-german').appendChild(lists[0]);
    resetAutoSlideDe();
}

function prevSlideDe() {
    let lists = document.querySelectorAll('#slide-german .item-german');
    document.getElementById('slide-german').prepend(lists[lists.length - 1]);
    resetAutoSlideDe();
}

function resetAutoSlideDe() {
    clearInterval(deAutoSlideTimer);
    deAutoSlideTimer = setInterval(nextSlideDe, 7000);
}

// Initialize sliders when their language is active
function initSliders() {
    if (document.getElementById('english').style.display !== 'none') {
        // English is visible
        document.getElementById('next').onclick = nextSlideEn;
        document.getElementById('prev').onclick = prevSlideEn;
        enAutoSlideTimer = setInterval(nextSlideEn, 7000);
    } else {
        // German is visible
        document.getElementById('next-german').onclick = nextSlideDe;
        document.getElementById('prev-german').onclick = prevSlideDe;
        deAutoSlideTimer = setInterval(nextSlideDe, 7000);
    }
}

// Keyboard controls (handle based on active language)
document.addEventListener('keydown', function(event) {
    if (document.getElementById('english').style.display !== 'none') {
        // English controls
        if (event.key === 'ArrowRight') nextSlideEn();
        if (event.key === 'ArrowLeft') prevSlideEn();
    } else {
        // German controls
        if (event.key === 'ArrowRight') nextSlideDe();
        if (event.key === 'ArrowLeft') prevSlideDe();
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    
    // Reinitialize when language changes
    document.getElementById('eng').addEventListener('change', function() {
        clearInterval(deAutoSlideTimer);
        initSliders();
    });
    
    document.getElementById('ger').addEventListener('change', function() {
        clearInterval(enAutoSlideTimer);
        initSliders();
    });
});