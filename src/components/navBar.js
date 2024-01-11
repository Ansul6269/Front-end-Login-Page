import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const navigate = useNavigate();

  function ClickJoinHandler() {
  
    navigate("/signup");
  }

  function clickLoginHandler() {
    // Update with the correct path for login
    navigate("/login");
  }
  const [showPassword, setShowPassword] = useState(false);
  const [isExpert, setIsExpert] = useState(false);
  const [isOrganizationInAfrica, setIsOrganizationInAfrica] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleExpertCheckboxChange = () => {
    setIsExpert(!isExpert);
  };

  const handleOrganizationCheckboxChange = () => {
    setIsOrganizationInAfrica(!isOrganizationInAfrica);
  };

  return (
    <div className="flex flex-col md:flex-row absolute h-[1054.384px] md:w-[953.418]">
  {/* image */}
  <div className="relative mb-8 md:mb-0 md:mr-8">
    <div className="absolute z-10 pl-10 text-2xl font-bold text-white">Welcome To Panda</div>
    <img
      src="https://s3-alpha-sig.figma.com/img/7bef/2a0e/e30b0acc8d68f9cf68264bd0e5a3043a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3VLYVESh7LAN306WTnFb0TAMMOJBIw14pUX~kMN6B~wpeKTgv2aQ8M9D5U8ae4s~8tK18J7SpWXMllRHscVkjMnXU4w0Q3YWIluofenaJBKqt04XqBKXta9g~w7cv4GNXA3naJG5RCTONl1Utmwoxy~-a6n8ShCVgDbJNwaTqY2CqDV0P7NL~eR7ckqiBCPZwWbz3vLf3JfyMD~SzdrFd53OV2UUvwPrtVsykBAC-QlsA3lgnIL1ps-P5WHMRo8xV8jDAXiNCSsNgjieTNZ5370WhWBpO~5C6d4G7bb9HGbvlCfn17r4nba8ypAujYSFb0xm90F6K63LIOU~G2zYQ__"
      alt="photuu"
      className="rounded-lg shadow-md"
    ></img>
  </div>

  {/* form vala part */}
  <div className="md:w-1/2">
    <div className="flex flex-col justify-center mt-10 md:flex-row md:gap-5">
      <div>
        <button onClick={ClickJoinHandler} className="font-bold hover:underline hover:text-gray-600">
          Join Panda
        </button>
      </div>
      <div>
        <span className="text-gray-600">Or</span>
      </div>
      <div>
        <button onClick={clickLoginHandler} className="font-bold hover:underline hover:text-gray-600">
          Login
        </button>
      </div>
    </div>

    <div className="py-10 mt-10 border rounded-t-full">
      {/* text section */}
      <div>
        <h1 className="text-2xl font-bold ">Create your free account</h1>
        <h2 className="text-sm font-bold">Take less than <span className="text-sm text-rose-900">5 minutes...</span></h2>
      </div>
  {/* form section */}
  <div className="mt-20">
  <div className="overflow-x-auto">
  <label className="block font-medium text-gray-600 text-md">Email:</label>
  <input
    type="text"
    className="w-full p-3 mt-1 text-lg border-2 rounded-md focus:outline-none focus:border-blue-500"
  />
</div>
      <div className="mb-4">
        <label className="block font-medium text-gray-600 text-md">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full p-3 pr-10 text-lg border-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-4 py-3 text-lg text-gray-600"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button
          type="submit"
          className="p-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-600 text-md">Checkboxes:</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="expertCheckbox"
            className="mr-2"
            checked={isExpert}
            onChange={handleExpertCheckboxChange}
          />
          <label htmlFor="expertCheckbox" className="text-lg " id="ck1">
            I am an expert
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ck1"
            className="mr-2"
            checked={isOrganizationInAfrica}
            onChange={handleOrganizationCheckboxChange}
          />
          <label htmlFor="organizationCheckbox" className="text-lg">
            I am an organization in Africa
          </label>
        </div>
      </div>
    </div>
</div>

 </div>
    </div>
  );
}
