<template>
  <section class="about" id="about" data-aos="fade-up">
    <div class="container d-flex flex-wrap">
      <div class="text-container" data-aos="fade-right">
        <h2>عن المدرسة</h2>
        <p>
          مدرسة المستقبل الشاملة هي مؤسسة تعليمية رائدة تهدف إلى بناء جيل مبدع
          ومتميز من خلال برامج تعليمية متكاملة ومرافق حديثة.
        </p>
      </div>
      <div class="image-container" data-aos="fade-left ">
        <img src="@/assets/about.jpg" alt="عن المدرسة" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about {
  padding: 60px 30px;
  margin: 40px auto;
  max-width: 1200px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  background: #f5f5f5;
}

.container {
  display: flex;
  align-items: center;
  gap: 30px;
}

.text-container {
  flex: 1;
  text-align: left;
}

.text-container h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #272b30;
  text-shadow: 2px 2px 8px rgba(112, 99, 99, 0.3);
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #39424e;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .text-container h2 {
    font-size: 2rem;
    text-align: center;
  }

  .text-container p {
    font-size: 1rem;
    text-align: center;
  }

  .image-container {
    margin-top: 20px;
  }
}
</style>
