import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function LoginForm({ className, ...props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/auth/signin", {
        username,
        password,
      }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      console.log("Login successful", response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-red-900 backdrop-blur-md shadow-lg border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  autoComplete="username"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-red-300 hover:text-red-400 transition-all"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-[#B03052]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-300">{error}</p>}
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-[#B03052] hover:bg-[#D04460] rounded-md py-1"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-400 text-black hover:bg-red-200/10 hover:text-white"
                >
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-300 underline hover:text-red-400"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
