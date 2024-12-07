<template>
  <div
    class="login-page d-flex align-items-center justify-content-center vh-100"
  >
    <div class="container text-center">
      <h1 class="mb-4 text-success">أهلاً وسهلاً بك</h1>
      <div class="card p-4 shadow-lg">
        <h2 class="mb-3">حدد طريقة الدخول</h2>
        <div class="row text-center">
          <!-- أيقونة طالب -->
          <div class="col-6 col-md-3 mb-4">
            <button
              class="btn btn-outline-primary w-100"
              @click="navigateTo('student')"
            >
              <i class="fa-solid fa-user-graduate fa-3x mb-2"></i>
              <p>طالب</p>
            </button>
          </div>
          <!-- أيقونة ولي أمر -->
          <div class="col-6 col-md-3 mb-4">
            <button
              class="btn btn-outline-danger w-100"
              @click="navigateTo('parent')"
            >
              <i class="fa-solid fa-user-tie fa-3x mb-2"></i>
              <p>ولي أمر</p>
            </button>
          </div>
          <!-- أيقونة معلم -->
          <div class="col-6 col-md-3 mb-4">
            <button
              class="btn btn-outline-warning w-100"
              @click="navigateTo('teacher')"
            >
              <i class="fa-solid fa-chalkboard-teacher fa-3x mb-2"></i>
              <p>معلم</p>
            </button>
          </div>
          <!-- أيقونة آدمن -->
          <div class="col-6 col-md-3 mb-4">
            <button
              class="btn btn-outline-info w-100"
              @click="navigateTo('admin')"
            >
              <i class="fa-solid fa-cogs fa-3x mb-2"></i>
              <p>آدمن</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {
    navigateTo(role) {
      alert(`تم اختيار الدخول كـ: ${role}`);
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: rgb(229, 237, 247);
}

.card {
  border-radius: 15px;
}
button {
  text-transform: capitalize;
}
h1 {
  background: linear-gradient(to right, #007bff, #0056b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
