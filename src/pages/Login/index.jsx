import Logo from "../../assets/Logo2.png";

export const SignIn = () => {
  return (
    <div className="bg-blue h-full w-full place-items-center">
      <div className="h-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="">
          <path
            fill="#F1DFA1"
            fill-opacity="1"
            d="M0,192L60,160C120,128,240,64,360,48C480,32,600,64,720,90.7C840,117,960,139,1080,133.3C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col md:mt-5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
        <a
          href="#"
          className="flex-col items-center mb-6 text-2xl font-bold text-white mr-3"
        >
          <img src={Logo} alt="logo" className="h-20" />
        </a>
        <div className="w-full text-white bg-darkerBlueOpa rounded-lg md:mt-0 sm:max-w-md xl:p-0 font-poppins">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-white font-semibold text-4xl">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="text-white block mb-2 text-md font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 h-8 bg-inputsLightBlue focus:border-blue focus:ring-2 border-white placeholder-white placeholder-opacity-10"
                  placeholder="jhon.doe"
                  required
                />
              </div>
              <div>
                <label className="text-white block mb-2 text-md font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 h-8 bg-inputsLightBlue focus:border-blue focus:ring-2 border-white placeholder-white placeholder-opacity-10"
                  placeholder="******"
                  required
                />
              </div>
              <div className="justify-between flex items-center">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      className="w-4 h-4 border border-white rounded bg-inputsLightBlue focus:ring-blue"
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-1.5 text-sm">
                    <label className="text-white font-semibold">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm text-white underline font-semibold font-poppins">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-lightGreen rounded-md text-white h-10 hover:bg-darkerGreen font-bold"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="w-full rounded-lg shadow mt-5 sm:max-w-md xl:p-0 bg-gray-800 text-center h-10 flex justify-center align-middle items-center text-white bg-darkerBlueOpa font-poppins">
          <a
            href="#"
            className="text-primary-600 hover:underline font-semibold text-sm sm:text-sm"
          >
            Don't have an account?
          </a>
        </div>
      </div>
    </div>
  );
};
