import { useState }  from 'react'
import { X } from 'lucide-react';

function Login({setIsOpen}) {
  const [activeForm, setActiveForm] = useState('student'); // student, teacher, admin

      const forms = {
    student: {
      title: 'Student Login',
      gradient: 'from-blue-500 to-cyan-500'
    },
    teacher: {
      title: 'Teacher Login',
      gradient: 'from-teal-500 to-green-500'
    },
    institute: {
      title: 'Institute Login',
      gradient: 'from-yellow-500 to-orange-500'
    }
  };
  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header with Gradient */}
            <div className={`bg-gradient-to-r ${forms[activeForm].gradient} p-6 relative`}>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-4 right-4 text-white hover:text-gray-500 hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-white text-center">
                {forms[activeForm].title}
              </h2>
              <p className="text-white text-opacity-90 text-center mt-2 text-sm">
                Unified Education Platform
              </p>
            </div>

            {/* Form Switcher */}
            <div className="flex">
              <button
                onClick={() => setActiveForm('student')}
                className={`flex-1 py-3 text-sm font-medium cursor-pointer transition-all ${
                  activeForm === 'student'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setActiveForm('teacher')}
                className={`flex-1 py-3 text-sm font-medium cursor-pointer transition-all ${
                  activeForm === 'teacher'
                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => setActiveForm('institute')}
                className={`flex-1 py-3 text-sm font-medium cursor-pointer transition-all ${
                  activeForm === 'institute'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Institute
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeForm === 'student' ? 'Student ID' : 
                     activeForm === 'teacher' ? 'Employee ID' : 
                     'Institute ID'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{
                      focusRing: activeForm === 'student' ? '#3b82f6' : 
                                activeForm === 'teacher' ? '#14b8a6' : 
                                '#f59e0b'
                    }}
                    placeholder="Enter your ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 bg-gradient-to-r ${forms[activeForm].gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all`}
                >
                  Login as {activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>
                  Need help? <a href="#" className="text-blue-500 hover:underline">Contact Support</a>
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login