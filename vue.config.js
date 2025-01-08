module.exports = {
  chainWebpack: (config) => {
    // تعديل إعدادات تحميل الصور
    config.module.rule("images").set("generator", {
      filename: "@/assets/[name][ext]", // يحتفظ باسم الملف الأصلي
    });
  },
};
