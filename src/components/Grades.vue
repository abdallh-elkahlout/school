<template>
  <section class="grades-section" id="grades">
    <div class="container">
      <h2 class="text-center mb-5">المراحل الدراسية</h2>

      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-6 col-md-4 mb-4"
          v-for="(grade, index) in grades"
          :key="index"
        >
          <div class="card shadow-lg rounded-3 overflow-hidden text-center">
            <div class="card-body">
              <h5 class="card-title">{{ grade.name }}</h5>
              <p class="card-text">{{ grade.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from "axios"; // تم تعليق استيراد axios لعدم استخدام API حالياً

export default {
  name: "GradesSection",
  data() {
    return {
      grades: [
        {
          name: "الصف الأول",
          description: "مقدمة لتعليم الأطفال الأساسيات في جميع المواد.",
        },
        {
          name: "الصف الثاني",
          description: "توسيع المعارف في الرياضيات، العلوم، واللغة العربية.",
        },
        {
          name: "الصف الثالث",
          description: "استكشاف موضوعات جديدة مع تحسين المهارات الأساسية.",
        },
        {
          name: "الصف الرابع",
          description:
            "التركيز على تطوير مهارات التفكير النقدي والتفاعل الاجتماعي.",
        },
        {
          name: "الصف الخامس",
          description: "إعداد الطلاب لمراحل دراسية أكثر تحدياً.",
        },
      ],
    };
  },
  methods: {
    // API
    // async fetchGrades() {
    //   try {
    //     const response = await axios.get("http://127.0.0.1:8000/api/crades", {
    //       headers: {
    //         Accept: "application/json",
    //       },
    //     });
    //     this.grades = response.data.data;
    //   } catch (error) {
    //     console.error("خطأ أثناء جلب البيانات من API:", error);
    //   }
    // }, // تم تعليق دالة fetchGrades لعدم استخدام API حالياً
  },
  mounted() {
    // this.fetchGrades(); // تم تعليق استدعاء fetchGrades لعدم استخدام API حالياً
  },
};
</script>

<style scoped>
.grades-section {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.card-body {
  background-color: #fff;
  padding: 30px;
}

@media (max-width: 768px) {
  .card-title {
    font-size: 1.4rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .card-body {
    padding: 20px;
  }
}
</style>
