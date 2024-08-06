const SignUpComponent = () => {
  return (
    <>
      <div className=" lg:mb-0 xs:mb-6 h-[100%] container justify-center m-auto grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 xs:grid-cols-1 xs:grid-rows-1 gap-16 mt-8 ">
        <div data-aos="fade-right" data-aos-duration="2000">
          <img
            className=" max-w-[100%] overflow-auto"
            src="/images/createAccount.svg"
          />
        </div>
        <div className=" lg:pt-12 md:pt-0">
          <div data-aos="fade-down" data-aos-duration="2000">
            <h1 className=" lg:text-[51px] md:text-[40px] sm:text-[40px] xs:text-[40px]  font-semibold">
              Create account
            </h1>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="2000">
            <p className="lg:text-[22px] md:text-[18px] sm:text-[18px] xs:text-[18px] font-normal max-w-[380px]">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <div className="relative ">
            <form className="mt-7">
              <div data-aos="fade-left" data-aos-duration="500">
                <input
                  type="text"
                  className=" lg:w-[350px] xs:w-full px-12 py-[12px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Username"
                  required
                />
                <img
                  src="/images/user-round (3).svg"
                  className="absolute left-3 top-2 w-7"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <input
                  type="email"
                  className=" mt-3 lg:w-[350px] xs:w-full px-12 py-[12px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Email Address"
                  required
                />
                <img
                  src="/images/inputMessage.svg"
                  className="absolute left-3 top-[10px] w-7"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="1500">
                <input
                  type="password"
                  className=" mt-3 lg:w-[350px] xs:w-full px-12 py-[12px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Password"
                  required
                />
                <img
                  src="/images/lock-keyhole.svg"
                  className="absolute left-3 top-[10px] w-7"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="2000">
                <input
                  type="password"
                  className=" mt-3 lg:w-[350px] xs:w-full px-12 py-[12px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Password"
                  required
                />
                <img
                  src="/images/lock-keyhole.svg"
                  className="absolute left-3  top-[10px] w-7"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="2500">
                <button className=" lg:py-[10px] lg:px-[7.4rem] md:py-[10px] md:px-[7.4rem] sm:py-[10px] sm:px-[16.2rem] xs:py-[10px] xs:px-[6.3rem] flex flex-col hover:bg-purple-600 mt-7 bg-purple-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 rounded-3xl duration-500 border-2 border-purple-700">
                  <p className="items-center font-semibold">Create account</p>
                </button>
              </div>
            </form>
          </div>
          {/* <p className="bg-[red] w-[100%]">d</p>   */}
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
