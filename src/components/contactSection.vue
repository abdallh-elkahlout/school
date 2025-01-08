<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <!-- العنوان الرئيسي -->
      <h2 class="main-title"><span class="gradient-text">تواصل</span> معنا</h2>
      <div class="contact-wrapper">
        <!-- الصورة -->
        <div class="contact-image-container">
          <img
            src="/img/contact.png"
            alt="contact Image"
            class="contact-image"
          />
        </div>
        <!-- النموذج -->
        <div class="contact-form-container">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <input
              type="text"
              v-model="formData.name"
              placeholder="الاسم "
              required
            />
            <input
              type="email"
              v-model="formData.email"
              placeholder="الإيميل"
              required
            />
            <textarea
              type="text"
              v-model="formData.message"
              placeholder="الرسالة"
              required
            ></textarea>

            <button type="submit" class="submit-btn">إرسال</button>
          </form>
          <div v-if="formSubmitted" class="success-message">
            <p>تم إرسال الرسالة بنجاح! شكرًا لتواصلكم معنا.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      }, 2000);
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
.main-title {
  margin-bottom: 40px;
}
.contact-section {
  padding: 60px 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* العنوان الرئيسي */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.contact-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.contact-form-container {
  width: 60%;
  padding-right: 20px;
}

.contact-form {
  width: 100%;
  background-color: #ffffff;
  padding: 30px;
  border: 2px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  outline: none;
}
input,
textarea {
  direction: rtl;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

/* رسالة النجاح */
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

.contact-image-container {
  width: 70%;
}

.contact-image {
  width: 100%;
  height: auto;
}
.gradient-text {
  background: linear-gradient(to right, #007bff, #0056b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .contact-form-container,
  .contact-image-container {
    width: 100%;
    padding: 10px 0;
  }

  .contact-image {
    max-width: 100%;
  }
}
</style>
