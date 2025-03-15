import React, { useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState("Amelia");
  const [lastName, setLastName] = useState("Harper");

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl h-full">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <div>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg mr-2">Cancel</button>
            <button className="mt-2 px-4 py-2 bg-sky-500 text-white rounded-lg mr-2">Change Password</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h3 className="text-4xl font-semibold">{firstName} {lastName}</h3>
              <p className="text-gray-600">ID: 22</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                className="border p-2 rounded-lg w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                className="border p-2 rounded-lg w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Blood Type</label>
              <select className="border p-2 rounded-lg w-full">
              <option value="A+">A+</option>
              <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select className="border p-2 rounded-lg w-full">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Donor Availability</label>
              <select className="border p-2 rounded-lg w-full">
              <option>Available</option>
              <option>Not Available</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Birth Date</label>
              <input type="date" className="border p-2 rounded-lg w-full" defaultValue="1980-05-03" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 h-full w-full">
          {/* Contacts Form */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <div className="grid grid-rows-2 gap-4">
              <div>
                <label className="block text-gray-700">Phone</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="+1(213)555-4276" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="ameliah@dx-email.com" />
              </div>
            </div>
          </div>

          {/* Address Form */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Country</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="USA" />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="New York" />
              </div>
              <div>
                <label className="block text-gray-700">State/Province</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="New York" />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="405 E 42nd St" />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input className="border p-2 rounded-lg w-full" defaultValue="90014" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
