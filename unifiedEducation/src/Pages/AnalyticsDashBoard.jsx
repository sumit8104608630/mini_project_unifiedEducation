import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const AnalyticsDashBoard = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Sample data for top 10 colleges
  const collegesData = [
    { id: 1, name: "St. Xavier's College", institute: "Mumbai University", score: 95, grade: "A+", students: 3200, attendance: 94, performance: 96, faculty: 92 },
    { id: 2, name: "Hindu College", institute: "Delhi University", score: 93, grade: "A+", students: 2800, attendance: 92, performance: 94, faculty: 93 },
    { id: 3, name: "Loyola College", institute: "Madras University", score: 91, grade: "A+", students: 3500, attendance: 91, performance: 92, faculty: 90 },
    { id: 4, name: "Christ University", institute: "Autonomous", score: 89, grade: "A", students: 4200, attendance: 89, performance: 90, faculty: 88 },
    { id: 5, name: "Miranda House", institute: "Delhi University", score: 88, grade: "A", students: 2200, attendance: 90, performance: 89, faculty: 85 },
    { id: 6, name: "Presidency College", institute: "Calcutta University", score: 86, grade: "A", students: 2900, attendance: 87, performance: 88, faculty: 84 },
    { id: 7, name: "Ramjas College", institute: "Delhi University", score: 84, grade: "A", students: 3100, attendance: 85, performance: 86, faculty: 82 },
    { id: 8, name: "Fergusson College", institute: "Pune University", score: 82, grade: "B+", students: 3300, attendance: 83, performance: 84, faculty: 80 },
    { id: 9, name: "Madras Christian College", institute: "Madras University", score: 80, grade: "B+", students: 2700, attendance: 82, performance: 81, faculty: 79 },
    { id: 10, name: "SRCC", institute: "Delhi University", score: 78, grade: "B+", students: 2500, attendance: 80, performance: 79, faculty: 77 }
  ];

  // Progress data for comparison
  const progressData = collegesData.map(college => ({
    name: college.name.split(' ')[0],
    score: college.score,
    attendance: college.attendance,
    performance: college.performance
  }));

  // Radar chart data for selected college
  const getRadarData = (college) => [
    { metric: 'Overall Score', value: college.score },
    { metric: 'Attendance', value: college.attendance },
    { metric: 'Performance', value: college.performance },
    { metric: 'Faculty Rating', value: college.faculty }
  ];

  const getGradeColor = (grade) => {
    const colors = {
      'A+': 'bg-green-100 text-green-800 border-green-300',
      'A': 'bg-blue-100 text-blue-800 border-blue-300',
      'B+': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'B': 'bg-orange-100 text-orange-800 border-orange-300'
    };
    return colors[grade] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="min-h-screen  mt-15 from-blue-50 via-white to-green-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h2>
          <p className="text-gray-600">Track performance and attendance metrics across top institutions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10</h3>
            <p className="text-sm text-gray-600">Top Colleges</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">30,500</h3>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">87.5%</h3>
            <p className="text-sm text-gray-600">Avg Attendance</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">87.2</h3>
            <p className="text-sm text-gray-600">Avg Score</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top 10 Colleges List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top 10 Colleges</h3>
              <div className="space-y-3">
                {collegesData.map((college, index) => (
                  <div
                    key={college.id}
                    onClick={() => setSelectedCollege(college)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedCollege?.id === college.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{college.name}</h4>
                          <p className="text-xs text-gray-500">{college.institute}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getGradeColor(college.grade)}`}>
                        {college.grade}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500">{college.students} students</span>
                      <span className="text-sm font-bold text-blue-600">{college.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Comparison Bar Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#3b82f6" name="Overall Score" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="attendance" fill="#10b981" name="Attendance" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="performance" fill="#8b5cf6" name="Performance" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Progress Trend Line Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Score Distribution Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} name="Score" />
                  <Line type="monotone" dataKey="performance" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} name="Performance" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Radar Chart for Selected College */}
            {selectedCollege && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedCollege.name}</h3>
                    <p className="text-sm text-gray-600">{selectedCollege.institute}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getGradeColor(selectedCollege.grade)}`}>
                    Grade: {selectedCollege.grade}
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={getRadarData(selectedCollege)}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name={selectedCollege.name} dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Students</p>
                    <p className="text-2xl font-bold text-blue-600">{selectedCollege.students}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Overall Score</p>
                    <p className="text-2xl font-bold text-green-600">{selectedCollege.score}%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashBoard;