"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Globe } from "lucide-react"

function Header() {
  return (
    <section className="w-full bg-black py-10 px-6 md:px-16" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
            شن قررت   <br /> تتعلم فلاتر يا برنس!؟
          </h1>
          <p className=" max-w-md text-white">
            كورس شامل بالعربية لتعلم فلاتر و دارت من الصفر حتى الاحتراف، مع محاضرات مسجلة و تفاعلية
          </p>



          {/* Stats */}
          <div className="flex space-x-10 pt-6 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-200"> تعرف انا من ؟ </h2>
              <p className="text-gray-50 text-sm max-w-[160px]">
              مبرمج حر ومطور ويب بخبرة واسعة في إنشاء تجارب رقمية جذابة
                  </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-200">شن خدماتي؟</h2>
              <p className="text-gray-50 text-sm max-w-[160px]">
                تطوير مواقع ويب مخصصة، تصميم واجهات مستخدم جذابة، وتحسين تجربة المستخدم
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
  {/* Right Side */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative flex justify-center"
>
  <div className="relative bg-gradient-to-b from-white to-gray-300 p-10 rounded-3xl  overflow-hidden">
    <div className=" w-[400px] h-[400px] overflow-hidden">
      <Image
        src="/zakariaphoto.png"
        alt="Visual Poetry"
        fill
        className="object-contain absolute top-36 hover:scale-120 hover:transform-gpu hover:transition hover:rotate-12 transition-transform duration-300"
        // 👆 moves head outside the yellow box
      />
    </div>

    {/* Globe Icon Top Right */}
    <div className="absolute top-4 right-4 bg-black rounded-full p-2 z-10">
      <Globe className="text-white w-5 h-5" />
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default Header
