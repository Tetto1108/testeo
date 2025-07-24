<script>
  const slides = document.querySelectorAll('.slide');
  const container = document.getElementById('sliderContainer');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  let currentIndex = 0;
  let interval = setInterval(nextSlide, 8000);

  // Crear dots dinámicos
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dot');

  function showSlide(index) {
    container.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 8000);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // ========================
  // Lógica para el video
  // ========================
  const video = document.getElementById('miVideo');

  // Reintenta reproducir el video con sonido después de que el usuario interactúe
  window.addEventListener('click', () => {
    video.muted = false;
    video.volume = 1.0;
    video.play();
  });

  // Intenta forzar volumen sin esperar clic
  video.muted = false;
  video.volume = 1.0;
  video.play().catch(() => {
    console.log('El navegador bloqueó la reproducción automática con sonido.');
  });
</script>