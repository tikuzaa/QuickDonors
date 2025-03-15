import { useEffect, useRef, useState } from "react";
import { MapPin, Search, Droplets, Clock, User, Loader2 } from "lucide-react";
import Navbar from "../components/Navigation";
import axios from "axios";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const Dashboard = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const findDonors = async () => {
    setLoading(true);
    setDonors([]);
    try {
      const response = await axios.post(
        "http://localhost:8080/find-donor",
        {
          address: searchAddress,
          bloodtype: selectedBloodType,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response.data.donors);
      setDonors(response.data.donors);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
    setLoading(false); // Stop loading
  };

  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:3001");

    wsRef.current.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setMessages((prev) => [...prev, { text: data.text, type: "received" }]);
      } catch (error) {
        console.error("Invalid message format:", error);
      }
    };

    wsRef.current.onclose = () => console.log("WebSocket disconnected");

    return () => wsRef.current?.close();
  }, []);

  const sendMessage = () => {
    if (wsRef.current && input.trim()) {
      const message = JSON.stringify({ text: input.trim() });
      wsRef.current.send(message);
      setMessages((prev) => [...prev, { text: input.trim(), type: "sent" }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} currentPage={"dashboard"} />
      <main className=" border max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
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
                disabled={loading}
                className={`bg-red-100 text-red-600 w-full p-2 rounded-md mt-6 cursor-pointer hover:bg-red-200 transition flex justify-center items-center ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Search donors"
                )}
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
                            {donor.lastDonation ? (
                              new Date(donor.lastDonation).toLocaleDateString(
                                "en-US"
                              )
                            ) : (
                              <span className="italic"> "Not Available"</span>
                            )}
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

          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <div className="h-[calc(100vh-12rem)]">
              {/* <Map donors={donors} center={[-74.006, 40.7128]} /> */}
            </div>
          </div>
        </div>
      </main>
      <div className="mt-8 border max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold mb-6 sm:ml-16">
          Chat in the community
        </h1>
        <div className="w-full bg-red-100 rounded-md p-4 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 w-fit max-w-xs break-words rounded-lg ${
                msg.type === "sent"
                  ? "bg-red-500 text-white ml-auto"
                  : "bg-white text-black mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex w-full gap-2 sm:flex-row flex-col sm: px-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-red-200 text-black border-none rounded-md outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-red-100 text-red-600 p-2 rounded-md cursor-pointer hover:bg-red-200 transition flex justify-center items-center sm:w-2/10"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
