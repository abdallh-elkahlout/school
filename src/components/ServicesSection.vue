<template>
  <section class="services-slider" id="services">
    <div class="container">
      <h2 class="text-center mb-5">الخدمات</h2>

      <div
        id="servicesCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
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
// import axios from "axios"; // تم تعليق استيراد axios لعدم استخدام API حالياً

export default {
  name: "ServicesSlider",
  data() {
    return {
      windowWidth: window.innerWidth,
      services: [
        {
          title: "مختبرات علمية",
          description: "مختبرات مجهزة بالكامل لتعزيز التعلم العملي.",
          image: "/img/laboratory.jpg",
        },
        {
          title: "مكتبة متكاملة",
          description: "مصادر تعليمية متنوعة لدعم البحث والتعلم الذاتي.",
          image: "/img/library.jpg",
        },
        {
          title: "أنشطة رياضية",
          description: "برامج رياضية لتنمية المهارات البدنية والروح الرياضية.",
          image: "/img/sports.jpg",
        },
        {
          title: "أنشطة فنية",
          description: "فرص إبداعية في الرسم والموسيقى والتصميم.",
          image: "/img/art.jpg",
        },
        {
          title: "منصات التعليم الذكي",
          description: "إنشاء منصات تفاعلية تقدم موارد تعليمية عبر الإنترنت.",
          image: "/img/sep.jpg",
        },
        {
          title: "ورش العمل المهنية",
          description: "تعليم الطلاب مهارات العمل.",
          image: "/img/pw.jpg",
        },
        {
          title: "الأنشطة الطلابية",
          description: "نوادي ثقافية وفنية مثل نادي القراءة، نادي الكتابة.",
          image: "/img/sa.jpg",
        },
        {
          title: "مقصف صحي ومتوان",
          description: "توفير وجبات غذائية صحية ومتوازنة للطلاب",
          image: "/img/canteen.jpg",
        },
      ],
    };
  },
  computed: {
    chunkedServices() {
      const chunkSize = this.windowWidth <= 768 ? 1 : 3;
      const result = [];
      for (let i = 0; i < this.services.length; i += chunkSize) {
        result.push(this.services.slice(i, i + chunkSize));
      }
      return result;
    },
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    // API
    // async fetchServices() {
    //   try {
    //     const response = await axios.get("http://127.0.0.1:8000/api/services", {
    //       headers: {
    //         Accept: "application/json",
    //       },
    //     });
    //     this.services = response.data.data; // تعبئة services بالبيانات من API
    //   } catch (error) {
    //     console.error("خطأ أثناء جلب البيانات من API:", error);
    //   }
    // }, // تم تعليق دالة fetchServices لعدم استخدام API حالياً
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    // this.fetchServices(); // تم تعليق استدعاء fetchServices لعدم استخدام API حالياً
  },
};
</script>

<style scoped>
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  font-size: 30px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: #0056b3;
}

.btn-primary {
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20%;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .card-title {
    font-size: 1.4rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .card-img-top {
    height: 200px;
  }

  .carousel-inner {
    padding: 10px 0;
  }

  .carousel-item {
    padding: 20px 0;
  }

  .col-12 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 8px 15px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 25px;
    height: 25px;
  }

  .carousel-control-prev-icon::before,
  .carousel-control-next-icon::before {
    font-size: 25px;
  }
}
</style>
