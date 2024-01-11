import { useState } from "react";

export default function Signup() {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Make a POST request to your backend endpoint for user registration
          const response = await fetch("http://localhost:4000/api/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
    
          if (response.ok) {
            // Handle success, e.g., redirect to login page or show a success message
            console.log("User created successfully:", data.user);
          } else {
            // Handle errors, e.g., show error message to the user
            console.error("Error creating user:", data.message);
          }
        } catch (error) {
          console.error("Internal server error:", error);
        }
      };
    return(
      <div className="flex flex-wrap justify-center items-center  ">

        {/* image */}
        
        <div className="mr-8 mb-8 relative">
        <div className="absolute z-10 text-white text-2xl font-bold pl-10 ">Welcome To Panda</div>
        <img
          src="https://s3-alpha-sig.figma.com/img/7bef/2a0e/e30b0acc8d68f9cf68264bd0e5a3043a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3VLYVESh7LAN306WTnFb0TAMMOJBIw14pUX~kMN6B~wpeKTgv2aQ8M9D5U8ae4s~8tK18J7SpWXMllRHscVkjMnXU4w0Q3YWIluofenaJBKqt04XqBKXta9g~w7cv4GNXA3naJG5RCTONl1Utmwoxy~-a6n8ShCVgDbJNwaTqY2CqDV0P7NL~eR7ckqiBCPZwWbz3vLf3JfyMD~SzdrFd53OV2UUvwPrtVsykBAC-QlsA3lgnIL1ps-P5WHMRo8xV8jDAXiNCSsNgjieTNZ5370WhWBpO~5C6d4G7bb9HGbvlCfn17r4nba8ypAujYSFb0xm90F6K63LIOU~G2zYQ__"
          alt="photuu"
          className="rounded-lg shadow-md"
        ></img>
      </div>

      {/* form */}
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">First Name:</label>
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Last Name:</label>
            <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
           join PANDA
          </button>
        </form>
      </div>
    </div>
    
    )
}