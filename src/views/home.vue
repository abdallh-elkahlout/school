<template>
  <div id="app">
    <HeaderSection />
    <AboutSection />
    <ServicesSection />
    <GradesSection />
    <ContactSection />
    <FooterSection />
    <button v-show="isVisible" class="back-to-top" @click="scrollToTop">
      <i class="fa-solid fa-up-long"></i>
    </button>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import GradesSection from "@/components/Grades.vue";
import FooterSection from "@/components/FooterSection.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    HeaderSection,
    AboutSection,
    ServicesSection,
    ContactSection,
    GradesSection,
    FooterSection,
  },
  data() {
    return {
      isVisible: false, // لتحديد ما إذا كان الزر يجب أن يظهر أم لا
    };
  },
  methods: {
    // التمرير إلى أعلى الصفحة
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    // متابعة التمرير والتحديث بناءً على موقع الصفحة
    handleScroll() {
      this.isVisible = window.scrollY > 2000; // يظهر الزر بعد التمرير 2000px
    },
  },
  mounted() {
    // تمرير الصفحة إلى الأعلى عند التحميل
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // أو behavior: "auto"
    }, 0); // إضافة مستمع للتمرير عند تحميل المكون
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // إزالة مستمع التمرير عندما يتم تدمير المكون
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
body {
  font-family: "Cairo", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* تخصيص العرض واللون العام للمؤشر */
::-webkit-scrollbar {
  width: 10px; /* عرض المؤشر */
  height: 10px; /* عرض المؤشر الأفقي (إذا كان موجودًا) */
}

/* تخصيص خلفية المؤشر */
::-webkit-scrollbar-track {
  background: #f4f4f4; /* لون المسار */
  border-radius: 10px; /* حواف مستديرة للمسار */
}

/* تخصيص المقبض الخاص بالمؤشر */
::-webkit-scrollbar-thumb {
  background: #007bff; /* لون المقبض */
  border-radius: 10px; /* حواف مستديرة للمقبض */
  border: 2px solid #f4f4f4; /* إضافة إطار حول المقبض */
}

/* تخصيص المقبض عند التمرير أو التفاعل */
::-webkit-scrollbar-thumb:hover {
  background: #0056b3; /* لون عند التمرير */
}

/* لجعل المؤشر أقل وضوحًا عند التمرير */
::-webkit-scrollbar-thumb:active {
  background: #003d80;
}
/* تخصيص زر العودة للأعلى */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgba(0, 123, 255, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
