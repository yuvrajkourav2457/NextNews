import NewsFeatures from "@/components/Features";
import HeroSection from "@/components/Hero";
import { NewspaperIcon, Webhook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <div className="flex justify-center items-center text-black flex-col gap-4 h-[44vh]">
      <div className="font-bold text-3xl ">Personalised News Application</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        quas vero aut, tempora corrupti nesciunt maiores reprehenderit cupiditate.</p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
         focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5
          py-2.5 text-center me-2 mb-2">Start Here</button>

        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
         focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5
          py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div> */}
    
    {/* <div className="bg-black h-1 opacity-10"> */}
    {/* </div> */}

    <HeroSection />
    
    <NewsFeatures />

    </>
  );
}
