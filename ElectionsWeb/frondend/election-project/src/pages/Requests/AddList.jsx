// import React, { useState } from 'react';
// import axios from 'axios';

// function AddList() {
//   const [formData, setFormData] = useState({
//     name: '',
//     logo: '',
//     list: '',
//     circle: '',
//     governorate: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // ارسال البيانات الى السيرفر
//       const response = await axios.post('http://localhost:3001/api/lists', formData);
//       console.log(response.data); // عرض الرسالة بعد الإضافة الناجحة
//       alert('تمت إضافة القائمة بنجاح!');
//     } catch (error) {
//       console.error('Error adding list:', error);
//       alert('حدث خطأ أثناء إضافة القائمة.');
//     }
//   };

//   return (
//     <div dir="rtl">
//       <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
//             اسم القائمة
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
//             اسم المفوض
//           </label>
//           <input
//             type="text"
//             id="logo"
//             name="logo"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             value={formData.logo}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="list" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
//             الدائرة
//           </label>
//           <input
//             type="text"
//             id="list"
//             name="list"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             value={formData.list}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="circle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
//             المحافظة
//           </label>
//           <input
//             type="text"
//             id="circle"
//             name="circle"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             value={formData.circle}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           إضافة قائمة جديدة
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddList;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddList() {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here if needed
//     navigate('/CandidatesRequest'); // Navigate to the candidate selection form
//   };

//   return (
//     <div dir="rtl"> {/* Setting the direction to right-to-left */}
//       <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
//         {/* Form fields */}
//         <div className="mb-5">
//           <label
//             htmlFor="text"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
//           >
//             اسم القائمة
//           </label>
//           <input
//             type="text"
//             id="text"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//         </div>
//         {/* Other form fields */}
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//         >
//           التالي
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddList;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../layouts/navbar';

function AddList() {
  const [listName, setListName] = useState('');
  const [org, setOrgName] = useState('');
  const [circle, setCircleName] = useState('');
  const [logo, setLogo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [file_path, setFile] = useState('');



  const [province, setProvince] = useState('');
  const [circleOptions, setCircleOptions] = useState([]);
  
  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
  
    // تحديث خيارات الدائرة بناءً على المحافظة المختارة
    if (selectedProvince === 'Amman') {
      setCircleOptions(['الدائرة الأولى', 'الدائرة الثانية']);
    } else if (selectedProvince === 'Zarqa') {
      setCircleOptions(['الدائرة الأولى']);
    } else {
      setCircleOptions([]);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!listName || !logo || !org || !circle|| !file_path ) {
      setError('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/lists', { 
        name: listName,
        logo: logo,
        org: org,
        circle: circle,
        file_path:file_path
      });

      const listId = response.data.list_id;
      navigate('/CandidatesRequest', { state: { listId } });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError('حدث خطأ: البيانات غير مكتملة أو غير صحيحة.');
        } else if (error.response.status === 500) {
          setError('حدث خطأ في الخادم. حاول مرة أخرى لاحقًا.');
        } else {
          setError('حدث خطأ غير متوقع.');
        }
      } else {
        setError('لا يمكن الاتصال بالخادم. تأكد من تشغيل الخادم وحاول مرة أخرى.');
      }
      console.error('Error adding list:', error.response?.data || error.message);
    }
  };

  return (
    <div dir="rtl" className="bg-white text-gray-900">
      <Navbar />
      <form className="max-w-lg mx-auto mt-10 p-6 bg-red-50 rounded-lg shadow-md" onSubmit={handleSubmit}>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <div className="mb-6">
        <h4 className="text-3xl text-center font-bold mb-4 text-green-700"> طلب إنشاء قائمة محلية </h4>

          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 text-right">
            اسم القائمة
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="org" className="block mb-2 text-sm font-medium text-gray-900 text-right">
            اسم مقدم الطلب
          </label>
          <input
            type="text"
            id="org"
            className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
            value={org}
            onChange={(e) => setOrgName(e.target.value)}
            required
          />
        </div>

     <div className="mb-6 flex flex-col space-y-4">
     <div className="mb-6 flex flex-col space-y-4">
    <div>
      <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900 text-right">
        المحافظة
      </label>
      <select
        id="province"
        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
        value={province}
        onChange={handleProvinceChange}
        required
      >
        <option value="">اختر المحافظة</option>
        <option value="Amman">عمان</option>
        <option value="Zarqa">الزرقاء</option>
        {/* أضف المزيد من المحافظات حسب الحاجة */}
      </select>
    </div>

    <div>
      <label htmlFor="circle" className="block mb-2 text-sm font-medium text-gray-900 text-right">
        الدائرة
      </label>
      <select
        id="circle"
        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
        value={circle}
        onChange={(e) => setCircleName(e.target.value)}
        required
      >
        <option value="">اختر الدائرة</option>
        {circleOptions.map((circle, index) => (
          <option key={index} value={circle}>{circle}</option>
        ))}
      </select>
    </div>
  </div>

  <div className="mb-6">
  <label htmlFor="file_path" className="block mb-2 text-sm font-medium text-gray-900 text-right">
    رابط الملف
  </label>
  <input
    type="text"
    id="file_path"
    className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
    onChange={(e) => setFile(e.target.value)}
    required
  />
</div>

</div>




      
        <div className="mb-6">
          <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900 text-right">
            شعار القائمة
          </label>
          <input
            type="text"
            id="logo"
            className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          التالي
        </button>
      </form>
    </div>
  );
}

export default AddList;