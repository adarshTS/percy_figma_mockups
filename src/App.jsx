import React, { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const login = () => {
    if (email && password) {
      setIsLoggedIn(true);
      setCurrentPage("landing");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setCurrentPage("logout");
  };

  const goToLogin = () => {
    setCurrentPage("login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="w-screen h-screen bg-white font-poppins overflow-hidden">
      {currentPage === "login" && (
        <div className="w-full h-full flex">
          <div className="flex-1 flex justify-center items-center max-lg:px-4">
            <div className="w-[404px] max-sm:w-full">
              <div className="mb-[53px]">
                <h1 className="text-[32px] font-medium text-black mb-0">
                  Welcome!
                </h1>
                <p className="text-[16px] font-medium text-black mt-0">
                  Enter your Credentials to access your account
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-black">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-[52px] px-2.5 border border-gray-300 rounded-[10px] text-[10px] placeholder-gray-300 focus:outline-none focus:border-[#3A5B22]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-[14px] font-medium text-black">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full h-[52px] px-2.5 border border-gray-300 rounded-[10px] text-[10px] placeholder-gray-300 focus:outline-none focus:border-[#3A5B22]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-300 text-[12px]"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <a
                    href="#"
                    className="absolute right-0 top-1.5 text-[10px] font-medium text-[#0C2A92]"
                  >
                    forgot password
                  </a>
                </div>
                <div className="flex items-center gap-1.5 mt-[18px]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-[9px] h-[10px] border border-black rounded-[2px]"
                  />
                  <label className="text-[9px] font-medium text-black">
                    Remember for 30 days
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full h-[35px] bg-[#3A5B22] border border-[#3A5B22] rounded-[10px] text-white text-[13px] font-bold mt-[21px]"
                >
                  Login
                </button>
              </form>
              <div className="flex items-center gap-2.5 my-[30px]">
                <div className="flex-1 h-px bg-gray-100"></div>
                <span className="px-1.5 bg-white text-[9px] font-medium text-black">
                  Or
                </span>
                <div className="flex-1 h-px bg-gray-100"></div>
              </div>
              <div className="flex gap-[23px] max-sm:flex-col max-sm:gap-3">
                <button className="flex-1 flex items-center justify-center gap-2.5 h-10 border border-gray-300 rounded-[10px] px-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#FFC107"
                    ></path>
                    <path
                      d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
                      fill="#FF3D00"
                    ></path>
                    <path
                      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.399 18 7.1905 16.3415 6.3585 14.027L3.0975 16.5395C4.7525 19.778 8.1135 22 12 22Z"
                      fill="#4CAF50"
                    ></path>
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#1976D2"
                    ></path>
                  </svg>
                  <span className="text-[12px] font-medium text-black">
                    Sign in with Google
                  </span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2.5 h-10 border border-gray-300 rounded-[10px] px-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_155)">
                      <path
                        d="M17.4862 -7.05128e-06C16.125 0.0918678 14.6681 0.901868 13.7662 1.99499C12.9768 2.95687 12.315 4.36874 12.5662 5.83499C12.3412 5.76562 12.1368 5.75812 11.8912 5.66999C11.2218 5.43187 10.4568 5.17499 9.50622 5.17499C7.6181 5.17499 5.68497 6.29812 4.46622 8.17499C2.69247 10.9012 3.04872 15.6994 5.74122 19.8C6.2156 20.52 6.76872 21.3056 7.45122 21.93C8.13372 22.5544 8.95872 23.0306 9.92622 23.04C10.7531 23.0494 11.3287 22.7737 11.8462 22.545C12.3637 22.3162 12.8456 22.1137 13.7512 22.11C13.7568 22.11 13.7606 22.11 13.7662 22.11C14.6681 22.1025 15.135 22.3012 15.6412 22.53C16.1475 22.7587 16.7175 23.0475 17.5462 23.04C18.5325 23.0325 19.3706 22.4925 20.0662 21.825C20.7618 21.1575 21.3337 20.3381 21.8062 19.62C22.4831 18.5887 22.755 18.0262 23.2762 16.875C23.3306 16.755 23.3325 16.6162 23.28 16.4944C23.2293 16.3725 23.13 16.2769 23.0062 16.23C21.3 15.585 20.3268 14.0756 20.1862 12.48C20.0456 10.8844 20.7206 9.24187 22.4212 8.30999C22.5468 8.24249 22.635 8.12437 22.665 7.98562C22.6931 7.84687 22.6593 7.70062 22.5712 7.58999C21.3506 6.07312 19.6331 5.17499 17.9512 5.17499C16.8787 5.17499 16.0912 5.42812 15.4462 5.66999C15.3393 5.71124 15.2606 5.70749 15.1612 5.74499C15.8156 5.39999 16.3931 4.92187 16.8262 4.36499C17.6137 3.35437 18.2212 1.91624 17.9962 0.404993C17.9587 0.157493 17.7356 -0.0187571 17.4862 -7.05128e-06ZM16.9762 1.13999C16.9443 2.10937 16.6125 3.05812 16.0612 3.76499C15.4837 4.50749 14.5125 5.02124 13.5712 5.17499C13.5881 4.24312 13.9556 3.27749 14.5162 2.59499C15.105 1.88249 16.08 1.36874 16.9762 1.13999ZM9.50622 6.13499C9.92622 6.13499 10.9012 6.33562 11.5612 6.56999C12.2212 6.80437 12.9168 7.07999 13.7362 7.07999C14.5368 7.07999 15.1706 6.80249 15.7912 6.56999C16.4118 6.33749 17.0306 6.13499 17.9512 6.13499C19.1531 6.13499 20.4525 6.75937 21.4762 7.84499C19.8375 9.00187 19.0706 10.8056 19.2262 12.555C19.3818 14.3231 20.4468 16.0012 22.1962 16.875C22.1937 16.8805 22.1912 16.8859 22.1887 16.8913C21.8142 17.7072 21.5644 18.2512 21.0112 19.095C20.5518 19.7944 20.0062 20.5594 19.4062 21.135C18.8062 21.7106 18.1706 22.0744 17.5312 22.08C16.9143 22.0856 16.5637 21.9019 16.0312 21.66C15.4987 21.4181 14.8106 21.1406 13.7512 21.15C12.6937 21.1556 11.9962 21.4219 11.4562 21.66C10.9162 21.8981 10.5618 22.0856 9.94122 22.08C9.28497 22.0744 8.6756 21.7556 8.09622 21.225C7.51685 20.6944 6.99372 19.9706 6.53622 19.275C4.01622 15.435 3.81372 10.9237 5.26122 8.69999C6.32247 7.06687 9.08622 6.13499 9.50622 6.13499Z"
                        fill="black"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_155">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[12px] font-medium text-black">
                    Sign in with Apple
                  </span>
                </button>
              </div>
              <div className="text-center mt-[30px]">
                <p className="text-[14px] font-medium text-black">
                  <span>Don't have an account? </span>
                  <span className="text-[#0F3DDE] cursor-pointer">Sign Up</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 max-lg:hidden">
            <img
              src="https://placehold.co/782x1117/4A90E2/FFFFFF?font=poppins&text=Hello..."
              alt="Login Background"
              className="w-full h-full object-cover rounded-l-[45px]"
            />
          </div>
        </div>
      )}

      {currentPage === "landing" && (
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200">
          <nav className="bg-white shadow-lg px-5 py-[15px]">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-[#3A5B22] rounded-lg flex items-center justify-center">
                  <p className="text-white font-bold text-lg">ADx</p>
                </div>
                <span className="text-xl font-semibold text-black">Demo</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[14px] text-black">Welcome, {email}</span>
                <button
                  onClick={logout}
                  className="bg-[#0C2A92] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
          <div className="max-w-[1200px] mx-auto px-5 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-10">
              <div className="bg-white p-[30px] rounded-[15px] shadow-xl">
                <div className="flex items-center gap-[15px] mb-5">
                  <div className="w-[50px] h-[50px] bg-[#3A5B22] rounded-[10px] flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-[5px]">
                      Projects
                    </h3>
                    <p className="text-[32px] font-bold text-[#3A5B22]">24</p>
                  </div>
                </div>
                <p className="text-[14px] text-gray-500">
                  Active projects in development
                </p>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-xl">
                <div className="flex items-center gap-[15px] mb-5">
                  <div className="w-[50px] h-[50px] bg-[#0C2A92] rounded-[10px] flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle
                        cx="8.5"
                        cy="7"
                        r="4"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle>
                      <path
                        d="M20 8V14"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M23 11H17"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-[5px]">
                      Team Members
                    </h3>
                    <p className="text-[32px] font-bold text-[#0C2A92]">12</p>
                  </div>
                </div>
                <p className="text-[14px] text-gray-500">Active team members</p>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-xl">
                <div className="flex items-center gap-[15px] mb-5">
                  <div className="w-[50px] h-[50px] bg-[#FF6B35] rounded-[10px] flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12H18L15 21L9 3L6 12H2"
                        stroke="#FFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-[5px]">
                      Performance
                    </h3>
                    <p className="text-[32px] font-bold text-[#FF6B35]">98%</p>
                  </div>
                </div>
                <p className="text-[14px] text-gray-500">
                  Overall system performance
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              <div className="bg-white p-[30px] rounded-[15px] shadow-xl">
                <h3 className="text-xl font-semibold text-black mb-5">
                  Recent Activity
                </h3>
                <div className="space-y-[15px]">
                  <div className="flex items-center gap-[15px] p-[15px] bg-gray-50 rounded-[10px]">
                    <div className="w-10 h-10 bg-[#3A5B22] rounded-lg flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-black">
                        John Doe updated project status
                      </p>
                      <p className="text-[12px] text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px] p-[15px] bg-gray-50 rounded-[10px]">
                    <div className="w-10 h-10 bg-[#0C2A92] rounded-lg flex items-center justify-center text-white font-semibold">
                      SM
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-black">
                        Sarah Miller completed task review
                      </p>
                      <p className="text-[12px] text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px] p-[15px] bg-gray-50 rounded-[10px]">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-semibold">
                      MJ
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-black">
                        Mike Johnson added new team member
                      </p>
                      <p className="text-[12px] text-gray-500">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-[30px] rounded-[15px] shadow-xl">
                <h3 className="text-xl font-semibold text-black mb-5">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-[15px]">
                  <button className="flex flex-col items-center justify-center p-5 bg-[#3A5B22] text-white rounded-[10px] gap-2.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M14 2V8H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 13H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 17H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10 9H9H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-[12px] font-medium">New Project</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-5 bg-[#0C2A92] text-white rounded-[10px] gap-2.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle
                        cx="8.5"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle>
                      <path
                        d="M20 8V14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M23 11H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-[12px] font-medium">Add Member</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-5 bg-[#FF6B35] text-white rounded-[10px] gap-2.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11H15M9 15H15M17 21L20 18L17 15M7 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-[12px] font-medium">Reports</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-5 bg-gray-500 text-white rounded-[10px] gap-2.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-[12px] font-medium">Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "logout" && (
        <div className="w-full h-full flex justify-center items-center bg-gray-50">
          <div className="w-[404px] max-sm:w-full px-4 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-[#3A5B22] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-[32px] font-medium text-black mb-2">
                Successfully Logged Out
              </h1>
              <p className="text-[16px] font-medium text-gray-600">
                Thank you for using our application. You have been safely logged
                out.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={goToLogin}
                className="w-full h-[52px] bg-[#3A5B22] border border-[#3A5B22] rounded-[10px] text-white text-[14px] font-bold"
              >
                Login Again
              </button>
              <p className="text-[12px] text-gray-500">
                Your session has been terminated and all data has been cleared.
              </p>
            </div>

            <div className="mt-8 p-4 bg-white rounded-[10px] border border-gray-200">
              <h3 className="text-[14px] font-semibold text-black mb-2">
                Security Notice
              </h3>
              <p className="text-[12px] text-gray-600">
                For your security, please close this browser window if you're
                using a shared computer.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
