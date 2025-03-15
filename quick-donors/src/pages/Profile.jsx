import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    bloodtype: "",
    location: { type: "Point", coordinates: [0, 0] },
    canDonate: false,
    lastDonation: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/profile", {
          withCredentials: true, // Ensure cookies are sent
        });
        setUser(response.data);
      } catch (error) {
        console.error(
          "Error fetching profile:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    const updatedCoordinates = [...user.location.coordinates];

    if (name === "latitude") updatedCoordinates[0] = parseFloat(value);
    if (name === "longitude") updatedCoordinates[1] = parseFloat(value);

    setUser((prev) => ({
      ...prev,
      location: { ...prev.location, coordinates: updatedCoordinates },
    }));
  };

  const handleUpdate = async () => {
    setLoading(true);
    setSuccessMessage("");
    try {
      const response = await axios.put(
        "http://localhost:8080/auth/profile",
        user,
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
      setSuccessMessage("Profile updated successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data?.message || error.message
      );
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-red-100 min-h-screen flex justify-center">
      <div className="bg-red-50 shadow-lg rounded-lg p-6 w-full max-w-7xl h-full">
        <div className="flex justify-between items-center border-b p-4 mb-2">
          <h2 className="text-2xl font-semibold">User Profile</h2>
          {successMessage && (
            <div className="flex items-center justify-center bg-green-100 text-green-700 p-3 rounded-md transition-opacity duration-500">
              <CheckCircle className="h-5 w-5 mr-2" />
              {successMessage}
            </div>
          )}
          <button
            onClick={handleUpdate}
            disabled={loading}
            className={`bg-red-100 text-red-600 p-2 rounded-md cursor-pointer hover:bg-red-200 transition flex justify-center items-center ${
              loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Update profile"
            )}
          </button>
        </div>

        <div className="bg-red-100 p-4 rounded-md mb-4">
          <div className=" grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                className="border p-2 border-gray-500 rounded w-full"
                name="username"
                value={user.username}
                onChange={handleChange}
                disabled
              />
              <span className="text-red-500 text-xs italic">
                *Can't edit username and email
              </span>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                className="border p-2 border-gray-500 rounded w-full"
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled
              />
              <span className="text-red-500 text-xs italic">
                *Can't edit username and email
              </span>
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                className="border p-2 border-gray-500 rounded w-full"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Blood Type</label>
              <select
                className="border p-2 border-gray-500 rounded w-full"
                name="bloodtype"
                value={user.bloodtype}
                onChange={handleChange}
              >
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
              <select
                className="border p-2 border-gray-500 rounded w-full"
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">DOB</label>
              <input
                type="date"
                className="border p-2 border-gray-500 rounded w-full"
                name="dateOfBirth"
                value={user.dateOfBirth ? user.dateOfBirth.split("T")[0] : ""}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="bg-red-100 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Donation Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <label className="mr-2">Available for Donation</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="canDonate"
                  checked={user.canDonate}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="sr-only peer"
                />
                <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95"></div>
              </label>
            </div>
            <div>
              <label className="block text-gray-700">Last Donation Date</label>
              <input
                type="date"
                className="border p-2 border-gray-500 rounded w-full"
                name="lastDonation"
                value={user.lastDonation ? user.lastDonation.split("T")[0] : ""}
                onChange={handleChange}
                disabled
              />
              <div className="text-red-500 text-xs italic">
                *Last date of donation is auto updated
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Latitude</label>
              <input
                type="number"
                step="any"
                className="border p-2 border-gray-500 rounded w-full"
                name="latitude"
                value={user.location.coordinates[0]}
                onChange={handleLocationChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Longitude</label>
              <input
                type="number"
                step="any"
                className="border p-2 border-gray-500 rounded w-full"
                name="longitude"
                value={user.location.coordinates[1]}
                onChange={handleLocationChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
