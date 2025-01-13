<template>
  <footer class="p-4 text-white position-relative">
    <div class="container">
      <div class="social-icons">
        <a href="#" class="text-white me-3">
          <i class="bi bi-facebook icon-responsive"></i>
        </a>
        <a href="#" class="text-white me-3">
          <i class="bi bi-whatsapp icon-responsive"></i>
        </a>
        <a href="#" class="text-white">
          <i class="bi bi-instagram icon-responsive"></i>
        </a>
      </div>
      <p class="lead mb-0 text-center footer-text">
        Copyright &copy; 2024 School
      </p>
    </div>
  </footer>
</template>

<style>
footer {
  background: linear-gradient(135deg, #2575fc, #6a11cb);
}

.icon-responsive {
  font-size: 3vw;
}

@media (min-width: 768px) {
  .icon-responsive {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .icon-responsive {
    font-size: 5vw;
  }
}
.social-icons {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 1rem;
}

.footer-text {
  text-align: center;
}

@media (max-width: 490px) {
  .social-icons {
    position: static;
    transform: none;
    text-align: center;
    margin-bottom: 1rem;
  }

  .footer-text {
    order: 2;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
