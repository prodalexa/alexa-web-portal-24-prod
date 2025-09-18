import Navbar from "@/components/recruitments25/Navbar";
import RegisterForm from "@/components/recruitments25/RegisterForm";
import ContactUs from "@/components/recruitments25/ContactUs";

export default function Recruitment25RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-[url('/recruitments25/RegisterFormBG.svg')] bg-cover bg-center">
      <Navbar />
      <RegisterForm />
      <ContactUs />
    </main>
  );
}
