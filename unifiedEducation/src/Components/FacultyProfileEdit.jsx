import React, { useState } from 'react';
import { User, Phone, Mail, BookOpen, Users, Lock, Camera } from 'lucide-react';

export default function FacultyEditProfile() {
  // Department/Admin provided information (read-only)
  const departmentData = {
    name: 'Prof. Rohan Verma',
    email: 'rohan.verma@unifiedcollege.edu',
    courses: [
      { id: '77c8acde1234abcd5678ff11', name: 'Data Structures and Algorithms' },
      { id: '77c8acde1234abcd5678ff15', name: 'Database Management Systems' }
    ],
    students: [
      { id: '6789abcd1234abcd5678abcd', name: 'Sumit Sharma', batch: '2021-2025' },
      { id: '6789abcd1234abcd5678abce', name: 'Priya Patel', batch: '2021-2025' }
    ]
  };

  // Editable fields by faculty
  const [editableData, setEditableData] = useState({
    phone: '9123456789',
    profilePic: 'https://cdn.example.com/faculty/rohan-verma.jpg',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const handleInputChange = (field, value) => {
    setEditableData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    // Validate phone number
    if (editableData.phone && editableData.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    // Validate password change if attempted
    if (showPasswordSection && editableData.newPassword) {
      if (!editableData.currentPassword) {
        alert('Please enter your current password');
        return;
      }
      if (editableData.newPassword !== editableData.confirmPassword) {
        alert('New password and confirm password do not match');
        return;
      }
      if (editableData.newPassword.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }
    }

    const updatedProfile = {
      ...departmentData,
      phone: editableData.phone,
      profilePic: editableData.profilePic,
      ...(editableData.newPassword && { password: editableData.newPassword })
    };

    console.log('Updated Faculty Profile:', updatedProfile);
    alert('Profile updated successfully! Check console for data.');
    
    // Reset password fields
    if (showPasswordSection) {
      setEditableData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
      setShowPasswordSection(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                {editableData.profilePic ? (
                  <img 
                    src={editableData.profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-4xl font-bold text-indigo-600">${departmentData.name.charAt(0)}</div>`;
                    }}
                  />
                ) : (
                  <div className="text-4xl font-bold text-indigo-600">
                    {departmentData.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
                <Camera className="w-4 h-4 text-indigo-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">{departmentData.name}</h1>
              <p className="text-indigo-100 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {departmentData.email}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Editable Personal Information */}
          <div className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-indigo-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={editableData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter 10-digit phone number"
                    maxLength="10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter without country code</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  value={editableData.profilePic}
                  onChange={(e) => handleInputChange('profilePic', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Lock className="w-6 h-6 text-indigo-600" />
                Change Password
              </h2>
              <button
                onClick={() => setShowPasswordSection(!showPasswordSection)}
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                {showPasswordSection ? 'Cancel' : 'Update Password'}
              </button>
            </div>
            
            {showPasswordSection && (
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={editableData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={editableData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter new password"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={editableData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Assigned Courses (Read-only) */}
          <div className="border-b pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-gray-400" />
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                Assigned Courses
              </h2>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-3">These courses are assigned by the department</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {departmentData.courses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                    <h3 className="font-semibold text-gray-800">{course.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">ID: {course.id}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Assigned Students (Read-only) */}
          <div className="pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-gray-400" />
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Mentoring Students
              </h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-3">Students assigned under your mentorship</p>
              <div className="space-y-2">
                {departmentData.students.map((student, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-600">Batch: {student.batch}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      ID: {student.id}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex gap-4">
            <button
              onClick={handleSaveChanges}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
            >
              Save Changes
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}