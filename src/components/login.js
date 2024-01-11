export default function Login(params) {
    
    return(
        <div className="flex flex-wrap justify-center items-center">
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
            <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
           Login
          </button>
            </form>
          </div>
        </div>
    )
}