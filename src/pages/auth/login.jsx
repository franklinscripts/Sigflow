import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Eye from '../../assets/eye.svg'
import ClosedEye from '../../assets/eye-closed.svg'
import "react-toastify/dist/ReactToastify.css";
import Google from '../../assets/google.svg'
import Github from '../../assets/github.svg'
import Key from '../../assets/key-01.svg'

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false)
  const apiUrl = "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login";
  const data = {
    email: "shalom.111@gmail.com",
    password: "shalom.111@gmail.com"
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required", toastOptions);
      return;
    }
    try {
      if (email == data.email && password == data.password) {
        const user = { email, password };
        const response = await axios.post(apiUrl, user);
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate('/')
      } else {
        toast.error("Invalid email or password", toastOptions);
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.", toastOptions);
    }
  };

  const navigate = useNavigate();

  // Check if the user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate("/"); // Redirect to the dashboard if the user is already logged in
    } 
  }, [navigate]);

  

  return (

    <div className="flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center border border-gray-100 p-[30px] md:w-[500px] w-full  h-full  justify-center md:mx-auto  rounded-md">

        <header className="text-center m-4 ">
          <h1 className=" font-medium text-[24px] text-[#101828] leading-normal">Welcome back!</h1>
          <span className="text-[#828282] text-[14px] font-normal ">Sign in to access your account</span>
        </header>

        <form onSubmit={handleSubmit} className="">
          <div className="py-3">

            <label htmlFor="email" className=" font-normal leading-5 text-[12px] text-[#101828]">Email</label>
            <div className="border md:w-[420px] w-full h-[38px] rounded-lg flex items-center px-4 mt-3">

              <input
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={({ target }) => setEmail(target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>
          <div className="py-3">
            <label htmlFor="password" className=" font-normal leading-5 text-[12px] text-[#101828]">Password</label>
            <div className="border md:w-[420px] w-full h-[38px] rounded-lg flex items-center px-4 mt-3">
              <input
                type={`${show ? "text" : "password"}`}
                value={password}
                placeholder="Enter your password"
                onChange={({ target }) => setPassword(target.value)}
                className="w-full outline-none"
              />
              <img src={show ? Eye : ClosedEye} alt="img" onClick={() => setShow(prev => !prev)} className="w-[24px]"/>
            </div>
          <span className="text-[12px] text-[#32D583] font-medium leading-5">Forgot Password ?</span>
          </div>
          <button type="submit" className="  bg-[#32D583] text-white border-none px-[30px] text-[14px] font-bold hover:opacity-80 rounded-md py-[10px] w-full mt-5">Sign in</button>
          <div className="flex items-center justify-center my-10">
            OR
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                <button className="px-[20px] py-[10px] rounded-lg flex items-center gap-2 border border-[#D0D5DD] text-[#101828] text-[13px]">
                  Sign in with Github
                  <img src={Github} alt="" />
                </button >
                <button className="px-[20px] py-[10px] rounded-lg flex items-center gap-2 border border-[#D0D5DD] text-[#101828] text-[13px]">
                  Sign in with Google
                  <img src={Google} alt="" />
                </button>
              </div>
              <button className="px-[20px] py-[10px] text-[13px] rounded-lg flex items-center gap-2 border border-[#D0D5DD] text-[#101828]">
                Sign in with SSO
                <img src={Key} alt="" />
              </button>
          </div>
          <ToastContainer />
        </form>
      </div>
      <span className="text-[12px] leading-5 font-normal text-[#101828]">Don{"'"}t have an account ? <span className="text-[#12B76A]">Sign in</span></span>
    </div>
  )
};

export default Login;
