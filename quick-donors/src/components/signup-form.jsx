import { cn } from "@/lib/utils";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function SignupForm({ className, ...props }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    if (password !== confirmPassword) {
      alert("Passwords don't match! Try again.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        username,
        email,
        password,
        bloodtype: bloodGroup,
        address,
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-red-900 backdrop-blur-md shadow-lg border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Create an Account</CardTitle>
          <CardDescription className="text-red-200"></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm_password" className="text-white">
                  Confirm Password
                </Label>
                <Input
                  id="confirm_password"
                  type="password"
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-white">
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Mountain View, California, United States"
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bloodGroup" className="text-white">
                  Blood Group
                </Label>
                <select
                  id="bloodGroup"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full bg-gray-800 border-gray-600 text-sm text-white placeholder-gray-400 focus:ring-[#B03052] rounded-md px-3 py-2"
                >
                  <option value="">Select Blood Type</option>
                  {bloodGroups.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full bg-[#B03052] hover:bg-[#D04460]">
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-400 text-black hover:bg-red-200/10 hover:text-white"
                >
                  Sign Up with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <a href="/login" className="text-red-300 underline hover:text-red-400">
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
