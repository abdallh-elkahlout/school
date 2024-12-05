<template>
  <section class="services-slider" id="services">
    <div class="container">
      <h2 class="text-center mb-5">الخدمات</h2>

      <!-- Carousel الخاص بالـ services باستخدام بطاقات -->
      <div
        id="servicesCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <!-- تكرار العناصر داخل carousel مع عرض بطاقة واحدة في الجوال وثلاثة في الشاشات الكبيرة -->
          <div
            v-for="(serviceGroup, groupIndex) in chunkedServices"
            :key="groupIndex"
            class="carousel-item"
            :class="{ active: groupIndex === 0 }"
          >
            <div class="row justify-content-center">
              <div
                class="col-12 col-md-4 mb-4"
                v-for="(service, index) in serviceGroup"
                :key="service.title"
                :class="{ 'd-none': windowWidth <= 768 && index > 0 }"
              >
                <div class="card shadow-lg rounded-3 overflow-hidden">
                  <img
                    :src="service.image"
                    class="card-img-top"
                    alt="service image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ service.title }}</h5>
                    <p class="card-text">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- أزرار تحريك البطاقات أسفل السلايدر -->
      <div class="d-flex justify-content-center mt-4">
        <button
          class="btn btn-primary mx-2"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="btn btn-primary mx-2"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSlider",
  data() {
    return {
      windowWidth: window.innerWidth, // تخزين عرض النافذة في المتغير
      services: [
        {
          title: "مختبرات علمية",
          description: "مختبرات مجهزة بالكامل لتعزيز التعلم العملي.",
          image: require("@/assets/laboratory.jpg"),
        },
        {
          title: "مكتبة متكاملة",
          description: "مصادر تعليمية متنوعة لدعم البحث والتعلم الذاتي.",
          image: require("@/assets/library.jpg"),
        },
        {
          title: "أنشطة رياضية",
          description: "برامج رياضية لتنمية المهارات البدنية والروح الرياضية.",
          image: require("@/assets/sports.jpg"),
        },
        {
          title: "أنشطة فنية",
          description: "فرص إبداعية في الرسم والموسيقى والتصميم.",
          image: require("@/assets/art.jpg"),
        },
        {
          title: "منصات التعليم الذكي",
          description: "إنشاء منصات تفاعلية تقدم موارد تعليمية عبر الإنترنت.",
          image: require("@/assets/sep.jpg"),
        },
        {
          title: "ورش العمل المهنية",
          description: "تعليم الطلاب مهارات العمل.",
          image: require("@/assets/pw.jpg"),
        },
        {
          title: "الأنشطة الطلابية",
          description:
            "نوادي ثقافية وفنية مثل نادي القراءة، نادي الكتابة.",
          image: require("@/assets/sa.jpg"),
        },
        {
          title: "مقصف صحي ومتوان",
          description: "توفير وجبات غذائية صحية ومتوازنة للطلاب",
          image: require("@/assets/canteen.jpg"),
        },
      ],
    };
  },
  computed: {
    chunkedServices() {
      // تقسيم الـ services إلى مجموعات من 1 في الجوال أو 3 في الشاشات الكبيرة
      const chunkSize = this.windowWidth <= 768 ? 1 : 3; // عرض 1 بطاقة فقط في الجوال
      const result = [];
      for (let i = 0; i < this.services.length; i += chunkSize) {
        result.push(this.services.slice(i, i + chunkSize));
      }
      return result;
    },
  },
  mounted() {
    // إضافة مستمع لحدث تغيير حجم النافذة
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    // إزالة مستمع الحدث عند تدمير المكون
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth; // تحديث عرض النافذة
    },
  },
};
</script>

<style scoped>
/* تصميم الـ Slider باستخدام بطاقات Bootstrap */
.services-slider {
  background-color: #f4f7fb;
  padding: 50px 0;
}

.carousel-item {
  padding: 30px 0;
}

.card {
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}

.card-body {
  background-color: #fff;
  color: #333;
  text-align: center;
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.card-text {
  font-size: 1rem;
  line-height: 1.5;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.carousel-control-prev,
.carousel-control-next {
  color: white;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #007bff;
  width: 20px; /* زيادة الحجم */
  height: 20px; /* زيادة الحجم */
  border-radius: 50%;
}

/* تغيير حجم الأسهم داخل الأزرار عند التمرير */
.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  font-size: 30px; /* زيادة حجم الأيقونة */
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: #0056b3;
}

/* تحسين الأزرار السفلية */
.btn-primary {
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20%;
  text-transform: uppercase;
}

/* تحسين العرض على الشاشات الصغيرة */
@media (max-width: 768px) {
  .card-title {
    font-size: 1.4rem; /* تصغير حجم العنوان */
  }

  .card-text {
    font-size: 0.9rem; /* تصغير حجم النص */
  }

  .card-img-top {
    height: 200px; /* تصغير حجم الصورة */
  }

  .carousel-inner {
    padding: 10px 0; /* تقليل المسافة حول السلايدر */
  }

  .carousel-item {
    padding: 20px 0; /* تقليل المسافة حول الشريحة */
  }

  .col-12 {
    padding-left: 15px; /* تقليل المسافة بين الأعمدة */
    padding-right: 15px;
  }

  .btn-primary {
    font-size: 1rem; /* تصغير حجم الأزرار */
    padding: 8px 15px; /* تقليل حجم الأزرار */
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 25px; /* زيادة الحجم */
    height: 25px;
  }

  .carousel-control-prev-icon::before,
  .carousel-control-next-icon::before {
    font-size: 25px; /* زيادة حجم الأيقونة */
  }
}
</style>
