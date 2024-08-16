import React, { useState, useEffect } from 'react';
import { Clock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Update_password = () => {

  const navigate = useNavigate();

  const [nid, set_nid] = useState(sessionStorage.getItem("nid"));
  const [pass, set_pass] = useState("");



  // useEffect(() => {
  //     axios.get(`http://localhost:5000/db/vs/log_in?nid=${nid}&email=${email}&pass=${pass}`)
  //         .then((res) => { set_user(res.data) })
  //         .catch((err) => console.log(err))

  // }, []);

  // set_nid(sessionStorage.getItem(nid));


  // console.log(user);

  // console.log(email);

  async function handel_submit(e) {
    e.preventDefault();

    // console.log(nid , email, otp) ;

    // 


    console.log(nid);
    console.log("a7a");

    try {
      console.log("please 1");
      const response = await axios.post(`http://localhost:3001/db/vs/new-pass`, { nid, pass })
        .catch(err => {

          console.error("Error details:", err.response ? err.response.data : err)
        })
      console.log("please 2");

      alert("Log in successfully !!!");

      // sessionStorage.setItem("eid", email);

      navigate("/log-in-home");

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

    set_pass("");

    // set_user("");

    // sessionStorage.setItem("signed", true);



  }



  return (
    <div className="bg-red-800 min-h-screen text-white flex justify-center items-center ">
      <div className="bg-white/10 w-[600px] h-fit rounded-lg p-6 max-sm:m-2">
        <h2 className="text-2xl mb-6 text-center">كلمة مرور جديدة</h2>
        <form className="space-y-4">
          <div>
            {/* <label htmlFor="nationalId" className="block text-sm font-medium mb-1">كلمة مرور جديدة</label> */}
            <div className="relative">
              <input
                id="nationalId"
                name="nationalId"
                type="text"
                placeholder="أدخل كلمة مرور جديدة"
                value={pass}
                onChange={(e) => { set_pass(e.target.value) }}
                className="w-full px-3 py-2 bg-white text-gray-800 rounded-md pr-10"
                required
              />
              <LogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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

export default Update_password;