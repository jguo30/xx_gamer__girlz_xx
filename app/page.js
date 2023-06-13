import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
}
