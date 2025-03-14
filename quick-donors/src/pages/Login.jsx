import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-red-50 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
