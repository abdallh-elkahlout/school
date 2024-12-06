<template>
  <div>
    <!-- شريط التنقل -->
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <!-- زر القائمة الجانبية للشاشات الصغيرة -->
        <button class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="list" v-if="!isSmallScreen">
          <a
            @click.prevent="$router.push('/login')"
            class="btn btn-outline-warning"
          >
            تسجيل دخول
          </a>

          <a @click.prevent="scrollToSection('contact')" class="nav-link"
            >تواصل معنا</a
          >
          <a @click.prevent="scrollToSection('grades')" class="nav-link"
            >المراحل الدراسية</a
          >
          <a @click.prevent="scrollToSection('services')" class="nav-link"
            >الخدمات</a
          >
          <a @click.prevent="scrollToSection('about')" class="nav-link"
            >عن المدرسة</a
          >
          <a @click.prevent="scrollToSection('home')" class="nav-link"
            >الرئيسية</a
          >
        </div>

        <div class="icon">
          <a @click.prevent="scrollToSection('home')" class="logo">المستقبل</a>
        </div>
      </div>
    </header>

    <!-- القائمة الجانبية للشاشات الصغيرة -->
    <div class="side-menu" :class="{ open: isMenuOpen }">
      <a
        @click.prevent="
          scrollToSection('home');
          toggleMenu();
        "
        class="menu-link"
        >الرئيسية</a
      >
      <a
        @click.prevent="
          scrollToSection('about');
          toggleMenu();
        "
        class="menu-link"
        >عن المدرسة</a
      >
      <a
        @click.prevent="
          scrollToSection('services');
          toggleMenu();
        "
        class="menu-link"
        >الأقسام</a
      >
      <a
        @click.prevent="
          scrollToSection('contact');
          toggleMenu();
        "
        class="menu-link"
        >تواصل معنا</a
      >
    </div>

    <!-- القسم الرئيسي -->
    <section id="home" class="hero">
      <div class="content">
        <h1 class="headline">مرحبًا بكم في مدرسة المستقبل</h1>
        <p class="subheadline">نوفر بيئة تعليمية شاملة لجميع المراحل</p>
        <a @click.prevent="scrollToSection('services')" class="cta-button"
          >اكتشف المزيد</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: window.innerWidth <= 480,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 480;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* إعدادات عامة */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f2f3f7;
  padding-top: 80px; /* مسافة من الأعلى لتجنب التداخل مع النافبار */
  overflow-x: hidden; /* منع التمرير الأفقي */
}

/* شريط التنقل */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  z-index: 1000;
  background: linear-gradient(135deg, #7a7cfa, #3a4e9b);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

.icon a {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  white-space: nowrap; /* منع النص من التمدد للخارج */
  overflow: hidden;
}

.list {
  display: flex;
  cursor: pointer;
}

.nav-link {
  position: relative;
  top: 5px;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
  color: white;
}

.nav-link:hover {
  color: #ffdd57;
}
.btn{
  padding: 10px;
}
/* زر القائمة الجانبية */
.hamburger {
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

/* القائمة الجانبية */
/* القائمة الجانبية */
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100%;
  background: #3a4e9b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: right 0.3s ease;
  z-index: 1001; /* التأكد من أن القائمة تظهر في الأعلى */
}

/* باقي التعديلات كما هي... */

.side-menu.open {
  right: 0;
}

.menu-link {
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin: 15px 0;
}

.menu-link:hover {
  color: #ffdd57;
}

/* قسم Hero */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, #7a7cfa, #4a6ed7);
  color: white;
}

.content {
  z-index: 1;
}

.headline {
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subheadline {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-top: 15px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  margin-top: 30px; /* إضافة مسافة بين الزر والعناصر أعلاه */
  background-color: #ffdd57;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
  letter-spacing: 1px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  position: relative; /* التأكد من أن الزر لا يخرج عن الحاوية */
}

.cta-button:hover {
  background-color: #ff9f00;
  transform: translateY(-5px);
}

/* التصميم المتجاوب */
@media (max-width: 705px) {
  .list {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .icon a {
    font-size: 18px;
  }
}
</style>
