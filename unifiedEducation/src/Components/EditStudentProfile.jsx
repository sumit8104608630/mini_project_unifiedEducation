import React, { useState } from 'react';
import { User, Mail, Calendar, Award, Briefcase, Plus, Trash2, Lock } from 'lucide-react';

export default function StudentEditProfile() {
  // Pre-filled data from department (read-only)
  const departmentData = {
    name: 'Sumit Subodh Sharma',
    email: 'sumitsharma@example.com',
    role: 'Student',
    department: 'Computer Science Engineering',
    batch: 'Batch 2021-2025',
    courses: ['Data Structures', 'Computer Networks']
  };

  // Editable fields by student
  const [editableData, setEditableData] = useState({
    dob: '2003-05-21',
    gender: 'Male',
    profilePic: 'https://cdn.example.com/images/students/sumit.jpg',
    achievements: [
      {
        title: 'Hackathon Winner',
        year: 2023,
        description: 'Won first place in the State Level Hackathon for building an AI-powered attendance system.'
      },
      {
        title: 'Top Performer',
        year: 2022,
        description: 'Awarded for scoring highest marks in the Computer Networks subject.'
      }
    ],
    projects: [
      {
        title: 'AI Attendance System',
        description: 'Developed a facial recognition-based attendance system using Node.js and Python.',
        grade: 'A',
        projectLink: 'https://github.com/sumitsharma/ai-attendance-app'
      },
      {
        title: 'College ERP Portal',
        description: 'Built a full-stack MERN-based college management system.',
        grade: 'A+',
        projectLink: 'https://github.com/sumitsharma/college-erp'
      }
    ]
  });

  const [newAchievement, setNewAchievement] = useState({ title: '', year: '', description: '' });
  const [newProject, setNewProject] = useState({ title: '', description: '', grade: '', projectLink: '' });

  const handleInputChange = (field, value) => {
    setEditableData(prev => ({ ...prev, [field]: value }));
  };

  const addAchievement = () => {
    if (newAchievement.title && newAchievement.year) {
      setEditableData(prev => ({
        ...prev,
        achievements: [...prev.achievements, { ...newAchievement, year: parseInt(newAchievement.year) }]
      }));
      setNewAchievement({ title: '', year: '', description: '' });
    }
  };

  const removeAchievement = (index) => {
    setEditableData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setEditableData(prev => ({
        ...prev,
        projects: [...prev.projects, newProject]
      }));
      setNewProject({ title: '', description: '', grade: '', projectLink: '' });
    }
  };

  const removeProject = (index) => {
    setEditableData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handleSaveChanges = () => {
    const completeProfile = {
      ...departmentData,
      ...editableData
    };
    console.log('Updated Profile:', completeProfile);
    alert('Profile updated successfully! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
            {departmentData.name.charAt(0)}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Your Profile</h1>
          <p className="text-gray-600">Update your personal information and achievements</p>
        </div>

        <div className="space-y-6">
          {/* Department Provided Information (Read-only) */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-800">Department Assigned Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                  {departmentData.name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                  {departmentData.email}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Department</label>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                  {departmentData.department}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Batch</label>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                  {departmentData.batch}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-500 mb-1">Enrolled Courses</label>
                <div className="flex flex-wrap gap-2">
                  {departmentData.courses.map((course, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Editable Personal Information */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={editableData.dob}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={editableData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture URL</label>
                <input
                  type="url"
                  value={editableData.profilePic}
                  onChange={(e) => handleInputChange('profilePic', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/your-photo.jpg"
                />
                {editableData.profilePic && (
                  <div className="mt-2">
                    <img 
                      src={editableData.profilePic} 
                      alt="Profile Preview" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              Your Achievements
            </h2>
            <div className="space-y-3 mb-4">
              {editableData.achievements.map((achievement, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-yellow-700 font-medium">Year: {achievement.year}</p>
                    <p className="text-sm text-gray-700 mt-1">{achievement.description}</p>
                  </div>
                  <button
                    onClick={() => removeAchievement(index)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="font-medium text-gray-700 text-sm">Add New Achievement</h3>
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="Achievement Title"
                  value={newAchievement.title}
                  onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Year"
                    value={newAchievement.year}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, year: e.target.value }))}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    onClick={addAchievement}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
                <textarea
                  placeholder="Description"
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  rows="2"
                />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-600" />
              Your Projects
            </h2>
            <div className="space-y-3 mb-4">
              {editableData.projects.map((project, index) => (
                <div key={index} className="bg-green-50 border border-green-200 p-4 rounded-lg flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-800">{project.title}</h3>
                      {project.grade && (
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                          Grade: {project.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                    {project.projectLink && (
                      <a 
                        href={project.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => removeProject(index)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="font-medium text-gray-700 text-sm">Add New Project</h3>
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                rows="2"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Grade (e.g., A+)"
                  value={newProject.grade}
                  onChange={(e) => setNewProject(prev => ({ ...prev, grade: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="url"
                  placeholder="Project Link (optional)"
                  value={newProject.projectLink}
                  onChange={(e) => setNewProject(prev => ({ ...prev, projectLink: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={addProject}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 flex gap-4">
            <button
              onClick={handleSaveChanges}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
            >
              Save Changes
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}