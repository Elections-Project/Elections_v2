import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-red-700 text-white p-8 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-right">من نحن</h2>
            <div className="space-y-4 text-right">
              <p>
                الهيئة المستقلة للانتخابات هي الجهة المسؤولة عن إدارة العملية الانتخابية في الأردن وضمان نزاهتها وشفافيتها.
              </p>
              <h3 className="text-xl font-semibold">مهمتنا</h3>
              <p>
                نسعى لتعزيز الديمقراطية في الأردن من خلال إدارة انتخابات حرة ونزيهة، وضمان مشاركة جميع المواطنين في العملية الانتخابية.
              </p>
              <h3 className="text-xl font-semibold">رؤيتنا</h3>
              <p>
                نطمح لأن نكون مؤسسة رائدة في مجال إدارة الانتخابات، تحظى بثقة الشعب الأردني وتساهم في تطوير العملية الديمقراطية في المملكة.
              </p>
            </div>
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">قيمنا</h2>
              <ul className="text-gray-600 text-right">
                <li>الشفافية</li>
                <li>النزاهة</li>
                <li>الحيادية</li>
                <li>الكفاءة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;