import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-red-700 text-white p-8 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-right">اتصل بنا</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="الاسم الكامل" 
                className="w-full p-3 rounded text-right text-gray-800"
              />
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full p-3 rounded text-right text-gray-800"
              />
              <input 
                type="tel" 
                placeholder="رقم الهاتف" 
                className="w-full p-3 rounded text-right text-gray-800"
              />
              <textarea 
                placeholder="اكتب رسالتك هنا" 
                className="w-full p-3 rounded h-32 text-right text-gray-800"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
              >
                إرسال
              </button>
            </form>
          </div>
          <div className="bg-white p-8 md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                {/* Replace with actual Jordan flag or emblem */}
                <div className="w-full h-full bg-red-700 relative">
                  <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                  <div className="absolute top-0 left-0 w-0 h-0 
                                  border-t-[80px] border-t-transparent
                                  border-l-[160px] border-l-green-600"></div>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">الهيئة المستقلة للانتخابات</h2>
              <p className="text-gray-600">عمان، الأردن</p>
              <p className="text-gray-600">هاتف: +962 XXXXXXXX</p>
              <p className="text-gray-600">البريد الإلكتروني: info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;