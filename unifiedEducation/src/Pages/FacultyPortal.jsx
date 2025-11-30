import React, { useState } from 'react';
import { BookOpen, Users, ClipboardList, Calendar, Home, Bell, User, LogOut, Plus, Edit, Trash2, CheckCircle } from 'lucide-react';

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('courses');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample faculty data
  const facultyData = {
    name: 'Prof. Rohan Verma',
    totalCourses: 3,
    totalStudents: 45,
    pendingGrading: 8,
    upcomingClasses: 2,
    courses: [
      {
        id: 1,
        name: 'Data Structures',
        code: 'CS301',
        students: 15,
        avgAttendance: 88,
        completedTopics: 12,
        totalTopics: 16
      },
      {
        id: 2,
        name: 'Database Systems',
        code: 'CS302',
        students: 18,
        avgAttendance: 92,
        completedTopics: 10,
        totalTopics: 14
      },
      {
        id: 3,
        name: 'Web Development',
        code: 'CS303',
        students: 12,
        avgAttendance: 85,
        completedTopics: 14,
        totalTopics: 18
      }
    ],
    students: [
      { id: 1, name: 'Sumit Sharma', course: 'CS301', attendance: 92, grade: 'A' },
      { id: 2, name: 'Priya Patel', course: 'CS301', attendance: 88, grade: 'B+' },
      { id: 3, name: 'Rahul Kumar', course: 'CS302', attendance: 95, grade: 'A+' },
      { id: 4, name: 'Anita Singh', course: 'CS302', attendance: 78, grade: 'B' },
      { id: 5, name: 'Vikram Desai', course: 'CS303', attendance: 90, grade: 'A' }
    ],
    assignments: [
      { id: 1, title: 'Array Implementation', course: 'CS301', dueDate: '2025-12-05', submitted: 12, total: 15 },
      { id: 2, title: 'Database Design Project', course: 'CS302', dueDate: '2025-12-08', submitted: 15, total: 18 },
      { id: 3, title: 'React Components', course: 'CS303', dueDate: '2025-12-10', submitted: 8, total: 12 }
    ]
  };

  const handleMarkAttendance = (courseId) => {
    alert(`Opening attendance marking interface for course ${courseId}`);
  };

  const handleCreateAssignment = () => {
    setShowAddModal(true);
  };

  const handleGradeSubmissions = (assignmentId) => {
    alert(`Opening grading interface for assignment ${assignmentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Home className="w-5 h-5 text-gray-600" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Faculty Portal</h1>
              <p className="text-sm text-gray-500">Welcome back, {facultyData.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <LogOut className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Courses</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{facultyData.totalCourses}</p>
            <p className="text-xs text-gray-500">Active this semester</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Students</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{facultyData.totalStudents}</p>
            <p className="text-xs text-gray-500">Across all courses</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Pending Grading</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{facultyData.pendingGrading}</p>
            <p className="text-xs text-gray-500">Submissions to review</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Upcoming Classes</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{facultyData.upcomingClasses}</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'courses'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Courses
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'students'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Users className="w-4 h-4" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'assignments'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'attendance'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Attendance
          </button>
        </div>

        {/* Courses Tab - Management */}
        {activeTab === 'courses' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Manage Your Courses</h2>
              <button 
                onClick={() => alert('Add new course')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Plus className="w-4 h-4" />
                Add Course Material
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {facultyData.courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-500">{course.code}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Enrolled Students</p>
                      <p className="text-2xl font-bold text-gray-800">{course.students}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Avg Attendance</p>
                      <p className="text-2xl font-bold text-gray-800">{course.avgAttendance}%</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Course Progress</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {course.completedTopics}/{course.totalTopics} Topics
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
                        style={{ width: `${(course.completedTopics / course.totalTopics) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleMarkAttendance(course.id)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
                    >
                      Mark Attendance
                    </button>
                    <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Students Tab - Management */}
        {activeTab === 'students' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Manage Students</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Student Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Course</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Attendance</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Grade</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyData.students.map((student, index) => (
                    <tr key={student.id} className={index !== facultyData.students.length - 1 ? 'border-b border-gray-100' : ''}>
                      <td className="py-4 px-6 font-medium text-gray-800">{student.name}</td>
                      <td className="py-4 px-6 text-gray-600">{student.course}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`font-semibold ${student.attendance >= 90 ? 'text-green-600' : student.attendance >= 75 ? 'text-blue-600' : 'text-red-600'}`}>
                          {student.attendance}%
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                          {student.grade}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition">
                            <Edit className="w-4 h-4 text-blue-600" />
                          </button>
                          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs">
                            View Profile
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Assignments Tab - Management */}
        {activeTab === 'assignments' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Manage Assignments</h2>
              <button 
                onClick={handleCreateAssignment}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Plus className="w-4 h-4" />
                Create Assignment
              </button>
            </div>
            <div className="space-y-4">
              {facultyData.assignments.map((assignment) => (
                <div key={assignment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {assignment.course}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                        <span>Due: {assignment.dueDate}</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {assignment.submitted}/{assignment.total} Submitted
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 max-w-md">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button 
                        onClick={() => handleGradeSubmissions(assignment.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm font-medium"
                      >
                        Grade Submissions
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attendance Tab - Management */}
        {activeTab === 'attendance' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Mark Attendance</h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Select Course</option>
                {facultyData.courses.map(course => (
                  <option key={course.id} value={course.id}>{course.name} ({course.code})</option>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Select a Course to Mark Attendance</h3>
                <p className="text-gray-600 mb-6">Choose a course from the dropdown above to view students and mark attendance</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                  Start Attendance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Modal (placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Create New Assignment</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Assignment Title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Select Course</option>
                {facultyData.courses.map(course => (
                  <option key={course.id}>{course.name}</option>
                ))}
              </select>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    alert('Assignment created!');
                    setShowAddModal(false);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}