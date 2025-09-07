"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaPalette,
  FaProjectDiagram,
  FaTelegramPlane,
  FaWifi,
  FaLaptop,
} from "react-icons/fa";
import Header from "@/components/ui/Header/Header";

const syllabus = [
  {
    stage: "المرحلة الأولى: أساسيات Dart",
    icon: <FaCode size={24} className="text-white" />,
    description: "فهم لغة Dart تمامًا لأنها أساس Flutter",
    points: [
      "مقدمة عن Dart وأسباب تعلمها",
      "تركيب Dart SDK وتهيئة بيئة التطوير",
      "المتغيرات وأنواع البيانات",
      "الجمل الشرطية والحلقات",
      "الدوال والقوائم والخرائط",
      "البرمجة الكائنية وإدارة الأخطاء",
      "البرمجة غير المتزامنة والمكتبات",
      "التعامل مع الملفات و JSON",
    ],
  },
  {
    stage: "المرحلة الثانية: أساسيات Flutter",
    icon: <FaMobileAlt size={24} className="text-white" />,
    description: "بناء واجهات بسيطة والتعامل مع Widgets",
    points: [
      "مقدمة عن Flutter ولماذا يستخدم مع Dart",
      "تركيب Flutter SDK وتهيئة بيئة التطوير",
      "إنشاء أول تطبيق Flutter",
      "فهم هيكل المشروع",
      "Widgets الأساسية و Layout Widgets",
      "Scaffold و MaterialApp",
      "الألوان والخطوط وتنسيق النصوص",
    ],
  },
  {
    stage: "المرحلة الثالثة: التفاعلات والحالة",
    icon: <FaDumbbell size={24} className="text-white" />,
    description: "إضافة التفاعلات وإدارة State",
    points: [
      "StatefulWidget و setState",
      "TextField واستقبال المدخلات",
      "Switch, Checkbox, RadioButton",
      "GestureDetector و InkWell للأحداث المخصصة",
      "استخدام أزرار مختلفة",
    ],
  },
  {
    stage: "المرحلة الرابعة: التنقل بين الصفحات",
    icon: <FaProjectDiagram size={24} className="text-white" />,
    description: "التنقل بين صفحات التطبيق وتمرير البيانات",
    points: [
      "Navigator.push و Navigator.pop",
      "تمرير البيانات بين الصفحات",
      "Named Routes و Route Settings",
      "إدارة Back stack عند التنقل",
    ],
  },
  {
    stage: "المرحلة الخامسة: القوائم والبيانات",
    icon: <FaDatabase size={24} className="text-white" />,
    description: "عرض وتحديث البيانات بطريقة ديناميكية",
    points: [
      "ListView و GridView",
      "ListView.builder و GridView.builder",
      "عرض بيانات من مصفوفات وخرائط",
      "عناصر قابلة للنقر (ListTile, Card)",
      "تحديث، حذف، إضافة عناصر ديناميكية",
    ],
  },
  {
    stage: "المرحلة السادسة: تصميم واجهات احترافية",
    icon: <FaPalette size={24} className="text-white" />,
    description: "UI/UX و Animations و ThemeData",
    points: [
      "ThemeData لتوحيد الألوان والخطوط",
      "RTL support وتصميم بالعربية",
      "BoxDecoration, Shadows, Gradients",
      "Assets و Network Images",
      "Animations و Hero Animations",
    ],
  },
];

export default function FlutterProCourse() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white flex-col">
        <motion.div
          className="w-20 h-20 border-4 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <p className="mt-4 text-lg font-bold">جاري تحميل الموقع...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen" dir="rtl">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto p-6 bg-black rounded-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          لماذا يجب تعلم برمجة تطبيقات الهواتف؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaMobileAlt size={36} className="mx-auto mb-2 text-blue-400" />
            <h3 className="font-semibold mb-1">سوق واسع</h3>
            <p>
              تطبيقات الهواتف جزء أساسي من حياة المستخدمين اليومية والطلب على
              المطورين في تزايد مستمر.
            </p>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaCode size={36} className="mx-auto mb-2 text-green-400" />
            <h3 className="font-semibold mb-1">مهارات مطلوبة</h3>
            <p>
              تعلم Flutter وDart يمنحك مهارات حديثة تمكنك من بناء تطبيقات لكل
              المنصات بكود واحد.
            </p>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaProjectDiagram
              size={36}
              className="mx-auto mb-2 text-purple-400"
            />
            <h3 className="font-semibold mb-1">مشاريع واقعية</h3>
            <p>
              بإمكانك بناء مشاريع حقيقية واحترافية، بدءاً من تطبيقات بسيطة إلى
              تطبيقات معقدة.
            </p>
          </div>
        </div>
      </motion.div>

      {/* متطلبات الكورس */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto p-6 bg-black rounded-xl space-y-6 mt-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4">متطلبات الكورس</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaLaptop size={36} className="mx-auto mb-2 text-yellow-400" />
            <h3 className="font-semibold mb-1">لابتوب بمواصفات جيدة</h3>
            <p>لتثبيت Dart وFlutter وتشغيل المحاكيات بسلاسة.</p>
          </li>
          <li className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaWifi size={36} className="mx-auto mb-2 text-blue-400" />
            <h3 className="font-semibold mb-1">انترنت جيد</h3>
            <p>لتحميل الأدوات ومتابعة المحاضرات والمشاريع العملية.</p>
          </li>
          <li className="p-4 border border-gray-700 rounded-lg hover:shadow-lg transition">
            <FaTelegramPlane size={36} className="mx-auto mb-2 text-cyan-400" />
            <h3 className="font-semibold mb-1">حسابات Telegram وGoogle</h3>
            <p>
              لمتابعة المحاضرات المسجلة على Telegram وحضور اجتماعات Google Meet.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold mb-5">ابدأ رحلتك في Flutter الآن</h2>

        <a
          href="https://api.whatsapp.com/send?phone=218924167849" // ضع رقمك بدون + أو 00
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition"
        >
          سجل الآن وابدأ التعلم
        </a>
      </motion.div>

      <div className="max-w-7xl mx-auto p-6 space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-extrabold">
            كورس احترافي Flutter و Dart
          </h1>
          <p className="text-xl text-gray-300">
            بعد طلب كبير من الطلبة، هذا الكورس يشمل جميع الأساسيات لبناء تطبيقات
            احترافية بالعربية
          </p>
          <span className="inline-block bg-white text-black px-5 py-2 rounded-lg font-semibold text-lg">
            600 دينار ليبي
          </span>
          <p className="text-gray-400">
            محاضرات مسجلة على Telegram + محاضرات تفاعلية على Google Meet
          </p>
        </motion.div>

        {/* Timeline / Syllabus */}
        <div className="relative max-w-6xl mx-auto mt-16">
          {/* الخط العمودي */}
          <div className="absolute top-0 left-1/2 w-[2px] bg-white h-full -translate-x-1/2"></div>

          {syllabus.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-16 flex flex-col md:flex-row items-center justify-between relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* النقطة على الخط */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-black z-10"></div>

              {/* محتوى المرحلة */}
              <div className="bg-black border border-white shadow-md rounded-lg p-6 w-full md:w-5/12 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {stage.icon}
                  <h2 className="text-2xl font-semibold">{stage.stage}</h2>
                </div>
                <p className="text-gray-300 mb-3">{stage.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {stage.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-5">
            ابدأ رحلتك في Flutter الآن
          </h2>

          <a
            href="https://api.whatsapp.com/send?phone=218924167849" // ضع رقمك بدون + أو 00
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            سجل الآن وابدأ التعلم
          </a>
        </motion.div>
      </div>
    </div>
  );
}
