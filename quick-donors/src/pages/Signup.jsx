import { SignupForm } from "@/components/signup-form";

export default function Signup() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-red-50 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
