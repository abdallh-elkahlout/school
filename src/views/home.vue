<template>
  <div id="app">
    <HeaderSection />
    <AboutSection />
    <ServicesSection />
    <GradesSection />
    <contactSection />
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
import contactSection from "@/components/contactSection.vue";
import GradesSection from "@/components/Grades.vue";
import FooterSection from "@/components/FooterSection.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    HeaderSection,
    AboutSection,
    ServicesSection,
    contactSection,
    GradesSection,
    FooterSection,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 2000;
    },
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0); 
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
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

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #f4f4f4;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #007bff; 
  border-radius: 10px;
  border: 2px solid #f4f4f4;
}

::-webkit-scrollbar-thumb:hover {
  background: #0056b3;
}

::-webkit-scrollbar-thumb:active {
  background: #003d80;
}

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
