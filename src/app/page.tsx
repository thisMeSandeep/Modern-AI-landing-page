import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </div>
  );
}
