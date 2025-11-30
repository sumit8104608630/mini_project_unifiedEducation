import React, { useState } from 'react';
import { BookOpen, ClipboardList, BarChart3, Bell, User, Home, LogOut } from 'lucide-react';

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('courses');

  // Sample student data
  const studentData = {
    name: 'Student',
    enrolledCourses: 4,
    avgAttendance: 89,
    cgpa: 8.6,
    pendingTasks: 2,
    courses: [
      {
        id: 1,
        name: 'Data Structures',
        code: 'CS301',
        progress: 75,
        attendance: 92,
        grade: 'A'
      },
      {
        id: 2,
        name: 'Database Systems',
        code: 'CS302',
        progress: 60,
        attendance: 88,
        grade: 'B+'
      },
      {
        id: 3,
        name: 'Web Development',
        code: 'CS303',
        progress: 85,
        attendance: 95,
        grade: 'A'
      },
      {
        id: 4,
        name: 'Operating Systems',
        code: 'CS304',
        progress: 45,
        attendance: 82,
        grade: 'B'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Top Header */}
     

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Enrolled Courses</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{studentData.enrolledCourses}</p>
            <p className="text-xs text-gray-500">Active this semester</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-cyan-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Average Attendance</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{studentData.avgAttendance}%</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              Above target ✓
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">CGPA</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{studentData.cgpa}</p>
            <p className="text-xs text-gray-500">Out of 10.0</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Pending Tasks</p>
            <p className="text-4xl font-bold text-gray-800 mb-1">{studentData.pendingTasks}</p>
            <p className="text-xs text-gray-500">Due this week</p>
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
            onClick={() => setActiveTab('grades')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'grades'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Grades
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              activeTab === 'news'
                ? 'bg-white shadow text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Bell className="w-4 h-4" />
            News
          </button>
        </div>

        {/* Course Cards Grid */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studentData.courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
                    <p className="text-sm text-gray-500">{course.code}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                    {course.grade}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Course Progress</span>
                    <span className="text-sm font-semibold text-gray-800">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Attendance: </span>
                    <span className="text-sm font-bold text-gray-800">{course.attendance}%</span>
                  </div>
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Assignments</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Data Structures Assignment 3</h3>
                    <p className="text-sm text-gray-500">CS301 • Due: Dec 5, 2025</p>
                  </div>
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">
                    Submit
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Database Project Submission</h3>
                    <p className="text-sm text-gray-500">CS302 • Due: Dec 8, 2025</p>
                  </div>
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grades Tab */}
        {activeTab === 'grades' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Academic Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Course Name</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Code</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-gray-700">Progress</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-gray-700">Attendance</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-gray-700">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.courses.map((course, index) => (
                    <tr key={course.id} className={index !== studentData.courses.length - 1 ? 'border-b border-gray-100' : ''}>
                      <td className="py-4 px-4 font-medium text-gray-800">{course.name}</td>
                      <td className="py-4 px-4 text-gray-600">{course.code}</td>
                      <td className="py-4 px-4 text-center text-gray-700">{course.progress}%</td>
                      <td className="py-4 px-4 text-center font-semibold text-gray-800">{course.attendance}%</td>
                      <td className="py-4 px-4 text-center">
                        <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                          {course.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Announcements & News</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Campus Placement Drive</h3>
                <p className="text-sm text-gray-600 mb-2">Tech companies visiting next week for campus recruitment.</p>
                <p className="text-xs text-gray-500">Posted on Nov 28, 2025</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Mid-term Results Published</h3>
                <p className="text-sm text-gray-600 mb-2">Your mid-semester examination results are now available.</p>
                <p className="text-xs text-gray-500">Posted on Nov 27, 2025</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}