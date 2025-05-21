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

  document.getElementById('next').onclick = nextSlide;
  document.getElementById('prev').onclick = prevSlide;

  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
          nextSlide();
      } else if (event.key === 'ArrowLeft') {
          prevSlide();
      }
  });

  autoSlideTimer = setInterval(nextSlide, 7000);