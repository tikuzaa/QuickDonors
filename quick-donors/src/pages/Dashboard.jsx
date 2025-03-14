import { useState } from "react";
import Navbar from "../components/Navigation";
import { MapPin, Search, Droplets, Clock, User } from "lucide-react";
import Map from "@/components/Map";
import axios from "axios";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const Dashboard = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [donors, setDonors] = useState([]);
  const findDonors = async () => {
    const response = await axios.post("http://localhost:8080/find-donor", {
      address: searchAddress,
      bloodtype: selectedBloodType,
    });
    const foundDonor = response.data.donors;
    setDonors(foundDonor);
    console.log(foundDonor);
  };
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Find Blood Donors</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Type
              </label>
              <select
                value={selectedBloodType}
                onChange={(e) => setSelectedBloodType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select Blood Type</option>
                {bloodGroups.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  placeholder="Enter your location"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2"
                />
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={findDonors}
                className="bg-red-100 text-red-600 w-full p-2 rounded-md mt-6 cursor-pointer hover:bg-red-200 transition"
              >
                Search donors
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Available Donors
              </h3>
              {donors.length > 0 ? (
                donors.map((donor) => (
                  <div
                    key={donor._id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-400" />
                          <span className="ml-2 font-medium">
                            {donor.username}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Droplets className="h-4 w-4 mr-1" />
                          <span>{donor.bloodtype}</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>
                            {(donor.distance / 1000).toFixed(2)} km away
                          </span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>
                            Last donated on:{" "}
                            
                              {donor.lastDonation
                                ? new Date(
                                    donor.lastDonation
                                  ).toLocaleDateString("en-US")
                                :<span className="italic"> "Not Available"</span>}
                            </span>
                          
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm hover:bg-red-200 transition">
                        Contact
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-center opacity-75 text-red-600">
                  Sorry, no donor found nearby
                </h1>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <div className="h-[calc(100vh-12rem)]">
              {/* <Map
                donors={donors}
                center={[-74.006, 40.7128]} 
              />  */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
