export default function Form(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">

          <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Login</h2>
          <p className="text-gray-500 text-center mb-6">
            Please login using account detail below.</p>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
  
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-gray-500 text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300">Sign In </button>
          </form>
     <        div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">Dont have an Account?{' '}
              <a href="#" className="text-pink-500 hover:underline">Create account</a>
            </p>
          </div>
        </div>
      </div>
    )
}