// import React from 'react'

// function CandidatesRequest() {
//   return (
//     <div>
     
//     <div dir="rtl" className="max-w-sm mx-auto">
//       <h2 className="text-2xl font-bold mb-5 text-right">اختيار أسماء المرشحين</h2>
//       {/* Add form fields for selecting candidates */}
//       <form>
//         <div className="mb-5">
//           <label
//             htmlFor="candidate"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
//           >
//             اسم المرشح
//           </label>
//           <input
//             type="text"
//             id="candidate"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//         </div>
//         {/* Add more candidate selection fields if needed */}
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//         >
//           إرسال
//         </button>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default CandidatesRequest;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function CandidatesRequest() {
//   const [candidateName, setCandidateName] = useState('');
//   const location = useLocation();
//   const { listId } = location.state; // استرجاع listId من الصفحة السابقة

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // إرسال اسم المرشح وربطه بالقائمة
//       const response = await axios.post('http://localhost:3001/api/candidates', { 
//         N_Id: candidateName, // إرسال اسم المرشح كـ N_Id
//         ListId: listId 
//       });

     
  
//       alert('تم إضافة المرشح وربطه بالقائمة بنجاح!');
//     } catch (error) {
//       console.error('خطأ أثناء إضافة المرشح:', error);
//       alert('حدث خطأ أثناء إضافة المرشح.');
//     }
//   };

//   return (
//     <div dir="rtl" className="max-w-sm mx-auto">
//       <h2 className="text-2xl font-bold mb-5 text-right">اختيار أسماء المرشحين</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label
//             htmlFor="candidate"
//             className="block mb-2 text-sm font-medium text-gray-900 text-right"
//           >
//             اسم المرشح
//           </label>
//           <input
//             type="text"
//             id="candidate"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
//             value={candidateName}
//             onChange={(e) => setCandidateName(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//         >
//           إرسال
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CandidatesRequest;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function CandidatesRequest() {
//   const [candidateName, setCandidateName] = useState('');
//   const location = useLocation();
//   const { listId } = location.state; // استرجاع listId من الصفحة السابقة

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // إرسال اسم المرشح وربطه بالقائمة
//       const response = await axios.post('http://localhost:3001/api/candidates', { 
//         N_Id: candidateName, // إرسال اسم المرشح كـ N_Id
//         ListId: listId 
//       });
//       alert('تم إضافة المرشح وربطه بالقائمة بنجاح!');
//     } catch (error) {
//       console.error('خطأ أثناء إضافة المرشح:', error);
//       alert('حدث خطأ أثناء إضافة المرشح.');
//     }
//   };

//   return (
//     <div dir="rtl" className="max-w-sm mx-auto">
//       <h2 className="text-2xl font-bold mb-5 text-right">اختيار أسماء المرشحين</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label
//             htmlFor="candidate"
//             className="block mb-2 text-sm font-medium text-gray-900 text-right"
//           >
//             اسم المرشح
//           </label>
//           <input
//             type="number"
//             id="candidate"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
//             value={candidateName}
//             onChange={(e) => setCandidateName(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//         >
//           إرسال
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CandidatesRequest;



// -------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import axios from 'axios';

// function CandidatesRequest() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [religion, setReligion] = useState('');
//   const [circle, setCircle] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!name || !age || !gender || !religion || !circle || !city) {
//       setError('يرجى تعبئة جميع الحقول المطلوبة.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/candidates', {
//         name,
//         age,
//         gender,
//         religion,
//         circle,
//         city
//       });
//       setSuccess('تمت إضافة المرشح بنجاح!');
//       console.log(response.data);
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 400) {
//           setError('حدث خطأ: البيانات غير مكتملة أو غير صحيحة.');
//         } else if (error.response.status === 500) {
//           setError('حدث خطأ في الخادم. حاول مرة أخرى لاحقًا.');
//         } else {
//           setError('حدث خطأ غير متوقع.');
//         }
//       } else {
//         setError('لا يمكن الاتصال بالخادم. تأكد من تشغيل الخادم وحاول مرة أخرى.');
//       }
//       console.error('Error adding candidate:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div dir="rtl" className="max-w-md mx-auto p-4">
//       <h1 className="text-xl font-bold mb-4 text-center">إضافة مرشح</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
//         {success && <p className="text-green-600 mb-3 text-center">{success}</p>}

//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">اسم المرشح</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="age" className="block text-sm font-medium text-gray-700">العمر</label>
//           <input
//             type="number"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700">الجنس</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           >
//             <option value="">اختر...</option>
//             <option value="male">ذكر</option>
//             <option value="female">أنثى</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="religion" className="block text-sm font-medium text-gray-700">الدين</label>
//           <input
//             type="text"
//             id="religion"
//             value={religion}
//             onChange={(e) => setReligion(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="circle" className="block text-sm font-medium text-gray-700">الدائرة</label>
//           <input
//             type="text"
//             id="circle"
//             value={circle}
//             onChange={(e) => setCircle(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">المدينة</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//         >
//           إضافة مرشح
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CandidatesRequest;



// ------------------------------------------------------------------------------------
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function FetchUserByN_Id() {
//     const [N_Id, setN_Id] = useState('');
//     const [users, setUsers] = useState([]);
//     const [currentUserId, setCurrentUserId] = useState(null); 
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [showDetails, setShowDetails] = useState({});
//     const location = useLocation();
//     const { listId } = location.state || {};
//     const { circle } = location.state || {};

//     const fetchUser = async (N_Id) => {
//         if (!N_Id) {
//             setError('يرجى إدخال N_Id.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             if (users.length >= 10) {
//                 setError('لا يمكن إضافة أكثر من 10 مرشحين.');
//                 return;
//             }

//             const response = await axios.get(`http://localhost:3001/api/users/${N_Id}`);
//             const newUser = response.data;

//             setUsers(prevUsers => {
//                 // إضافة المستخدم الجديد إلى القائمة وتحديث حالة المعرف الحالي
//                 return [...prevUsers.filter(user => user.N_Id !== N_Id), newUser];
//             });
//             setCurrentUserId(N_Id); // تعيين المعرف الحالي
//         } catch (error) {
//             setError('حدث خطأ أثناء جلب البيانات.');
//             console.error('Error fetching user:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleFetch = () => {
//         fetchUser(N_Id);
//     };

//     const toggleDetails = (userId) => {
//         setShowDetails(prev => ({
//             ...prev,
//             [userId]: !prev[userId]
//         }));
//     };

//     return (
//         <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//             <h4 className="text-xl font-bold mb-4">استعلام عن مستخدم باستخدام N_Id</h4>
//             <p>رقم القائمة: {listId ? listId.list_id : 'غير متوفر'}</p>
//             <p>رقم الدائرة: {circle ? circle.circle : 'غير متوفر'}</p>

//             <input
//                 type="text"
//                 value={N_Id}
//                 onChange={(e) => setN_Id(e.target.value)}
//                 placeholder="أدخل N_Id"
//                 className="mb-4 p-2 border border-gray-300 rounded-md"
//             />
//             <button 
//                 onClick={handleFetch} 
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 disabled={loading}
//             >
//                 {loading ? 'جاري التحميل...' : 'استعلام'}
//             </button>
//             {error && <div className="text-red-500 mt-4">{error}</div>}
//             {users.length > 0 && (
//                 <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
//                     <h2 className="text-2xl font-bold mb-4">تفاصيل المستخدمين</h2>
//                     {users.map(user => (
//                         <div key={user.N_Id} className="mb-6">
//                             <div className="flex items-center justify-between">
//                                 <span className="text-lg font-semibold">{user.name}</span>
//                                 <button 
//                                     className="bg-green-500 text-white px-3 py-1 rounded-md"
//                                     onClick={() => toggleDetails(user.N_Id)}
//                                 >
//                                     {showDetails[user.N_Id] ? 'إخفاء التفاصيل' : 'إظهار التفاصيل'}
//                                 </button>
//                             </div>
//                             {showDetails[user.N_Id] && (
//                                 <div className="mt-4 p-4 bg-white rounded-lg shadow">
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">الاسم:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.name}</p>
//                                         </div>
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">البريد الإلكتروني:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.email}</p>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">الجنس:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.gender}</p>
//                                         </div>
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">العمر:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.age}</p>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">المدينة:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.city}</p>
//                                         </div>
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">الديانة:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.religion}</p>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">عنوان الاقتراع:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.polling_address}</p>
//                                         </div>
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">هل هو منظم:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.isOrganizer ? 'نعم' : 'لا'}</p>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">رمز التحقق:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.otp}</p>
//                                         </div>
//                                         <div>
//                                             <strong className="block text-sm font-medium text-gray-700">التوكن:</strong>
//                                             <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.token}</p>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <strong className="block text-sm font-medium text-gray-700">رقم الدائرة:</strong>
//                                         <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.circle_id}</p>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FetchUserByN_Id;

import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../layouts/navbar';

function FetchUserByN_Id() {
    const [N_Id, setN_Id] = useState('');
    const [users, setUsers] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showDetails, setShowDetails] = useState({});
    const location = useLocation();
    const { listId } = location.state || {};
    const { circle } = location.state || {};

    const fetchUser = async (N_Id) => {
        if (!N_Id) {
            setError('يرجى إدخال الرقم الوطني.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            if (users.length >= 10) {
                setError('لا يمكن إضافة أكثر من 10 مرشحين.');
                return;
            }

            const response = await axios.get(`http://localhost:3001/api/users/${N_Id}`);
            const newUser = response.data;

            setUsers(prevUsers => {
                return [...prevUsers.filter(user => user.N_Id !== N_Id), newUser];
            });
            setCurrentUserId(N_Id);
        } catch (error) {
            Swal.fire('خطأ', 'حدث خطأ أثناء جلب البيانات.', 'error');
            console.error('Error fetching user:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFetch = () => {
        fetchUser(N_Id);
    };

    const handleAddCandidate = async (user) => {
        const { value: isConfirmed } = await Swal.fire({
            title: 'تأكيد',
            text: 'هل أنت متأكد من إضافة هذا المرشح؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
        });

        if (!isConfirmed) {
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3001/api/candidates', {
                N_Id: user.N_Id,
                ListId: listId ? listId.list_id : null
            });

            console.log(response.data);
            setUsers(users.filter(u => u.N_Id !== user.N_Id));
            Swal.fire('نجاح', 'تمت إضافة المرشح بنجاح!', 'success');
        } catch (error) {
            setError('حدث خطأ أثناء إضافة المرشح.');
            console.error('Error adding candidate:', error);
            Swal.fire('خطأ', 'حدث خطأ أثناء إضافة المرشح.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const toggleDetails = (userId) => {
        setShowDetails(prev => ({
            ...prev,
            [userId]: !prev[userId]
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-lg mt-20 mx-auto w-full max-w-4xl">
                <h4 className="text-3xl font-bold mb-4 text-green-800">طلب إضافة مرشحين </h4>
                {/* <p className="text-gray-700 mb-2">رقم القائمة: {listId ? listId.list_id : 'غير متوفر'}</p>
                <p className="text-gray-700 mb-4">رقم الدائرة: {circle ? circle.circle : 'غير متوفر'}</p> */}

                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <input
                        type="text"
                        value={N_Id}
                        onChange={(e) => setN_Id(e.target.value)}
                        placeholder="أدخل الرقم الوطني"
                        className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <button 
                        onClick={handleFetch} 
                        className={`w-full px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
                        disabled={loading}
                    >
                        
                        {loading ? 'جاري التحميل...' : 'استعلام'}
                    </button>
                    {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
                </div>

                {users.length > 0 && (
                    <div className="w-full max-w-2xl mt-6 p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-green-800">قائمة المرشحين </h2>
                        {users.map(user => (
                            <div key={user.N_Id} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold text-gray-800">{user.name}</span>
                                    <div>
                                        <button 
                                            className="bg-yellow-500 text-white px-3 py-1 rounded-md ml-5 hover:bg-yellow-700"
                                            onClick={() => toggleDetails(user.N_Id)}
                                        >
                                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d={showDetails[user.N_Id] ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            {showDetails[user.N_Id] ? 'إخفاء التفاصيل' : 'إظهار التفاصيل'}
                                        </button>
                                        <button 
                                            className="bg-green-600 text-white px-3 py-1 rounded-md"
                                            onClick={() => handleAddCandidate(user)}
                                        > <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 13H5m7-7v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                            إضافة كمرشح
                                        </button>
                                    </div>
                                </div>
                                {showDetails[user.N_Id] && (
                                    <div className="bg-gray-100 p-4 rounded-md">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">الاسم:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.name}</p>
                                            </div>
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">البريد الإلكتروني:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">الجنس:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.gender}</p>
                                            </div>
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">العمر:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.age}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">المدينة:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.city}</p>
                                            </div>
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">الديانة:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.religion}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <strong className="block text-sm font-medium text-gray-700">عنوان الاقتراع:</strong>
                                                <p className="mt-1 p-2 border border-gray-300 rounded-md bg-white">{user.polling_address}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchUserByN_Id;