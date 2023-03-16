export const Login = () => {
  return (
    <div className="w-full text-white bg-darkerBlueOpa rounded-lg md:mt-0 sm:max-w-md xl:p-0 font-poppins">
      <div className="p-6 space-y-4 md:space-y-4 sm:p-4">
        <h1 className="text-white font-bold text-4xl text-center">Sign In</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-md">
              Username:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border sm:text-sm rounded-lg block w-full p-2.5 h-8 bg-inputsLightBlue focus:border-blue focus:ring-2 border-white placeholder-white placeholder-opacity-10"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-md">
              Password:
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border sm:text-sm rounded-lg block w-full p-2.5 h-8 bg-inputsLightBlue focus:border-blue focus:ring-2 border-white placeholder-white placeholder-opacity-10"
            />
          </div>
          <div className="justify-between flex items-center">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 border border-white rounded bg-inputsLightBlue focus:ring-blue"
                />
              </div>
              <div className="ml-1.5 text-sm">
                <label className="text-white font-semibold">Remember me</label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm text-white underline font-semibold font-poppins"
            >
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
  );
};
