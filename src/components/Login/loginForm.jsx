import { useLogin } from "../../Hooks/useLogin";
import { Alert } from "../alerts/alert";
export const Login = () => {
  const { handleSubmit, dataLogin, loading, alertsData } = useLogin();
  return (
    <div className="bg-darkerBlueOpa text-white font-poppins rounded-lg md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-4 sm:p-4">
        {
          alertsData.isActive ? <Alert message={alertsData.message.msg} />: null
        }
        <h1 className="text-center font-bold text-3xl">Sign In</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 font-semibold text-md">Username</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={dataLogin}
              className="w-full bg-inputsLightBlue rounded-lg border border-white p-2.5 h-8 text-sm"
            />
          </div>
          <div>
            <label className="mb-2 font-semibold text-md">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={dataLogin}
              className="w-full bg-inputsLightBlue rounded-lg border border-white p-2.5 h-8"
            />
          </div>
          <div className="justify-between flex items-center">
            <div>
              <input type="checkbox" className="rounded-md" />
              <label className="font-semibold text-sm pl-1.5">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="underline text-sm">
                Forgot password?
              </a>
            </div>
          </div>
          <button className="flex items-center content-center justify-center bg-lightGreen rounded-md hover:bg-darkerGreen font-bold w-full h-8 px-4 py-2 text-white">
            {loading ? (
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
