import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import gradient from './assets/gradient.png';



export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  })
  return (
    <main className="relative">
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src={gradient}
      />
      <div
        className="h-0 w-[40rem] absolute right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[-30deg] -z-20"
      ></div>
      <Header />
      <Hero />
    </main>
  );
}
