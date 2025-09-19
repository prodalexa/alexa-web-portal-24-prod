import Navbar from "@/components/recruitments25/Navbar";
import RegisterForm from "@/components/recruitments25/RegisterForm";
import ContactUs from "@/components/recruitments25/ContactUs";

export default function Recruitment25RegisterPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/recruitments25/RegisterFormBG.svg')`,
        }}
      />

      <div className="fixed inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <Navbar />
        <RegisterForm />
        <ContactUs />
      </div>
    </main>
  );
}
