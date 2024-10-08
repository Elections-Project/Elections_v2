import React, { useState,useEffect } from 'react';
import { Clock, Eye, EyeOff } from 'lucide-react';
import axios from "axios"

import { useNavigate } from "react-router-dom";


const Log_in = () => {
    

    const navigate = useNavigate();

    const [nid, set_nid] = useState("");
    const [email, set_email] = useState("");
    const [user, set_user] = useState("");
    const [status, set_status] = useState("");

    // useEffect(() => {
    //     if (status) {
    //         if (status === "password") {
    //             alert("Log in successfully ppppppp!!!");
    //             navigate("/log-in-home");
    //         } else if (status === "otp") {
    //             alert("Log in successfully ooo!!!");
    //             navigate("/log-in-new");
    //         }
    //     }
    // }, [status, navigate]);
    


    async function handel_submit(e) {
        e.preventDefault();
        console.log(nid, email);
        sessionStorage.setItem("nid", nid);
    
        try {
            const response = await axios.post(`http://localhost:3001/db/vs/sign_up`, { nid, email })
            .catch(err => {console.log(err)});
            console.log("ssssssss");
            set_status(response.data);
            console.log(status);
    
            if (response.data === "password") {
                alert("Log in successfully ppppppp!!!");
                navigate("/log-in-home");
            } else if (response.data === "otp") {
                alert("Log in successfully ooo!!!");
                navigate("/log-in-new");
            }
        } catch (error) {
            console.log("Log in failed", error);
            alert("Log in failed");
        }
    
        set_nid("");
        set_email("");
    }
    

    return (
        <div className="bg-red-800 min-h-screen text-white flex justify-center items-center ">


            <div className="bg-white/10 w-[600px] h-fit rounded-lg p-6 max-sm:m-2">
                <h2 className="text-2xl mb-6 text-center">التسجيل للمشاركة في الانتخابات</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="nationalId" className="block text-sm font-medium mb-1">الرقم الوطني</label>
                        <input
                            id="nationalId"
                            name="nationalId"
                            type="text"
                            placeholder="أدخل الرقم الوطني"
                            value={nid}
                            onChange={(e) => {set_nid(e.target.value)}}
                            className="w-full px-3 py-2 bg-white text-gray-800 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="أدخل بريدك الإلكتروني"
                            value={email}
                            onChange={(e) => {set_email(e.target.value)}}
                            className="w-full px-3 py-2 bg-white text-gray-800 rounded-md"
                            required
                        />
                    </div>
                    {/* <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">كلمة المرور</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={"password"}
                  placeholder="أدخل كلمة المرور"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-gray-800 rounded-md pr-10"
                  required
                />

              </div>
            </div> */}
                    <button
                        type="submit"  // Ensure the type is 'submit'
                        onClick={handel_submit}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        تسجيل
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Log_in;