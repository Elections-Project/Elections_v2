import React, { useState, useEffect } from 'react';
import { Clock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Log_in_new = () => {

  const navigate = useNavigate();

  const [nid, set_nid] = useState(sessionStorage.getItem("nid"));
  const [email, set_email] = useState("");
  const [otp, set_otp] = useState("");
  const [user, set_user] = useState("");
  const [result, set_result] = useState("");


  useEffect(() => {
      axios.get(`http://localhost:3001/db/vs/user`,{nid})
          .then((res) => { set_user(res.data) })
          .catch((err) => console.log(err))

  }, []);



  console.log(user);



  async function handel_submit(e) {
    console.log("here 0");
    e.preventDefault();

    console.log(nid , email, otp) ;

    try {
      console.log("here 1");
      const response = await axios.post(`http://localhost:3001/db/vs/log-in-new`, { nid, otp });
      // .then(res => set_result(res.data));
      console.log(response.data);
      set_result(response.data);
      console.log("here 2");

      console.log("here 3");

      console.log("r:" + response.data);
      console.log("here 4");

      if (response.data == "matched") {

        alert("Log in successfully !!!");
        navigate("/update-pass");
      }
      else {
        alert("something wrong !!!");
      }


      // sessionStorage.setItem("eid", email);


    }
    catch (error) {
      console.log("Log in failed", error);
      alert("Log in failed", error);
    }


    // let user = {
    //   email: email,
    //   pass: pass
    // };

    // sessionStorage.setItem("use_data", JSON.stringify(user));

    // alert("Signed successfully!!!");

    set_nid("");
    set_email("");
    set_otp("");
    // set_user("");

    // sessionStorage.setItem("signed", true);



  }



  return (
    <div className="bg-red-800 min-h-screen text-white flex justify-center items-center ">
      <div className="bg-white/10 w-[600px] h-[420px] rounded-lg p-6 max-sm:m-2">
        <h2 className="text-2xl mb-6 text-center">التسجيل للمشاركة في الانتخابات</h2>
        <h3 className="text-lg mb-6 text-center">تم ارسال كلمة مرور مؤقتة على ايملك</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium mb-1">الرقم الوطني</label>
            <div className="relative">
              <input
                id="nationalId"
                name="nationalId"
                type="text"
                placeholder="أدخل الرقم الوطني"
                value={nid}
                onChange={(e) => { set_nid(e.target.value) }}
                className="w-full px-3 py-2 bg-white text-gray-800 rounded-md pr-10"
                required
              />
              <LogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={user.Email}
              onChange={(e) => { set_email(e.target.value) }}
              className="w-full px-3 py-2 bg-white text-gray-800 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">كلمة المرور المؤقتة</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={"password"}
                placeholder="أدخل كلمة المرور المؤقتة"
                value={otp}
                onChange={(e) => { set_otp(e.target.value) }}
                className="w-full px-3 py-2 bg-white text-gray-800 rounded-md pr-10"
                required
              />
              <LogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <button
                type="button"

                className="absolute right-11 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
              </button>
            </div>
          </div>
          <button
            onClick={handel_submit}
            // type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default Log_in_new;