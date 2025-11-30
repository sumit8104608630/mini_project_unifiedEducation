import { GraduationCap, Menu, X, BookOpen, Award, BarChart3, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
    const features = [

    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      description: "Track performance and attendance metrics",
      link : "/analytic"
    }
  ];

    const portals = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student Portal",
      description: "Access courses, submit assignments, track grades and attendance",
      features: ["View Courses", "Submit Work", "Track Progress"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teacher Portal",
      description: "Manage courses, grade assignments, track student attendance",
      features: ["Course Management", "Grading", "Attendance"],
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Admin Portal",
      description: "Oversight, analytics, user management and institutional reports",
      features: ["Analytics", "User Management", "Reports"],
      gradient: "from-orange-400 to-blue-500"
    }
  ];

  return (



    <div className=' mt-10'>
        <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8  py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-6 px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Ministry of Education Initiative
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 bg-clip-text text-transparent font-semibold">Unified Education Platform</span>{" "}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive system connecting students, teachers, and institutions for seamless educational management
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex cursor-pointer justify-center md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <Link to={feature.link}
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="text-blue-500 flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Portal Selection Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Portal
          </h2>
          <p className="text-gray-600 text-lg">
            Select your role to access the appropriate dashboard
          </p>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl  ${portal.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                {portal.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {portal.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {portal.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {portal.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={"/student-portal"} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-sm">
                Access Portal
              </Link>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">
            © 2024 UniEdu Portal - Department of Higher Education
          </p>
          <p className="text-gray-500 text-sm">
            A unified platform for modern educational management
          </p>
        </div>
      </div>
    </footer>
      </div>
  )
}

export default Landing