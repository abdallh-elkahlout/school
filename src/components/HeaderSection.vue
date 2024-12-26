<template>
  <div>
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
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
        >الخدمات</a
      >
      <a
        @click.prevent="
          scrollToSection('contact');
          toggleMenu();
        "
        class="menu-link"
        >تواصل معنا</a
      >
      <a
        @click.prevent="$router.push('/login')"
        class="btn btn-outline-warning"
      >
        تسجيل دخول
      </a>
    </div>

    <!-- القسم الرئيسي -->
    <section id="home" class="home">
      <div class="content">
        <h1 class="headline">مرحبًا بكم في مدرسة المستقبل</h1>
        <p class="subheadline">نوفر بيئة تعليمية شاملة لجميع المراحل</p>
        <a
          class="enrollment-button"
          data-bs-toggle="modal"
          data-bs-target="#enroll"
          >طلب التحاق</a
        >
      </div>
    </section>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="enroll"
    tabindex="-1"
    aria-labelledby="enrollLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="enrollLabel">طلب التحاق</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="lead mb-3">
            يمكنك تقديم طلب التحاق من خلال إدخال البيانات:
          </p>
          <form>
            <div class="mb-3">
              <label for="name" class="col-form-label"> الاسم الكامل: </label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="enrollmentData.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="dob" class="col-form-label"> تاريخ الميلاد: </label>
              <input
                type="date"
                class="form-control"
                id="dob"
                v-model="enrollmentData.dob"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="col-form-label">الإيميل:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="enrollmentData.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="col-form-label">رقم الهاتف:</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                v-model="enrollmentData.phone"
                required
              />
            </div>
            <div class="mb-3">
              <label for="address" class="col-form-label">العنوان:</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="enrollmentData.address"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            @click.prevent="handleSubmit()"
            type="submit"
            class="btn submit"
          >
            إرسال الطلب
          </button>
        </div>
      </div>
      <div v-if="Submitted" class="success-message">
        <p>تم إرسال الطلب بنجاح! شكرًا لثقتكم بنا.</p>
      </div>
      <div v-if="!Submitted && Incomplete" class="error-message">
        <p>يرجى ملء جميع الحقول المطلوبة .</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: window.innerWidth <= 480,
      enrollmentData: {
        name: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
      },
      Submitted: false,
      Incomplete: false,
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
    handleSubmit() {
      if (
        this.enrollmentData.name &&
        this.enrollmentData.dob &&
        this.enrollmentData.email &&
        this.enrollmentData.phone &&
        this.enrollmentData.address
      ) {
        this.Submitted = true;
        setTimeout(() => {
          this.Submitted = false;
          this.enrollmentData.name = "";
          this.enrollmentData.dob = "";
          this.enrollmentData.email = "";
          this.enrollmentData.phone = "";
          this.enrollmentData.address = "";
        }, 2000);
      } else {
        this.Incomplete = true;
        setTimeout(() => {
          this.Incomplete = false;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f2f3f7;
  padding-top: 80px;
  overflow-x: hidden;
}

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
  white-space: nowrap;
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
.btn {
  padding: 10px;
}

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
  z-index: 1001;
}

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

.home {
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
  margin: 15px;
}

.enrollment-button {
  display: inline-block;
  padding: 15px 30px;
  margin: 5px 0;
  background-color: #ffdd57;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
  letter-spacing: 1px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  position: relative;
}

.enrollment-button:hover {
  background-color: #ff9f00;
  transform: translateY(-5px);
}

.modal {
  direction: rtl;
}
.btn-close {
  position: absolute;
  left: 10px;
}
.modal-header {
  background: linear-gradient(135deg, #7a7cfa, #3a4e9b);
  color: white;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
.submit {
  padding: 5px 50px;
  transition: 0.7s;
  background-color: #ffc107;
}
.submit:hover {
  padding: 5px 100px;
  transition: 0.7s;
  background-color: #ff9f00;
}

.success-message {
  position: relative;
  top: -25px;
  width: 100%;
  text-align: center;
  background-color: #28a745;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.error-message {
  position: relative;
  top: -25px;
  width: 100%;
  text-align: center;
  background-color: #fa6161;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

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
