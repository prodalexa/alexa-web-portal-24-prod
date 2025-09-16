import dynamic from "next/dynamic";

// Dynamically import RegisterForm to ensure client-side rendering
const RegisterForm = dynamic(() => import("@/components/recruitments25/RegisterForm"), {
  ssr: false,
});

export default function Recruitment25RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/recruitments25/RegisterFormBG.svg')] bg-cover bg-center">
      <RegisterForm />
    </main>
  );
}