import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchComponent from "./components/SearchComponent";

const MapBackground = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="">
        <MapBackground />
      </div>
      <div className="absolute z-20 left-0 top-0 w-full min-h-screen">
        <main className="px-4 md:px-8 py-4 mt-16 grid md:grid-cols-3 gap-4">
          <div>
            {/* <div className="p-4 h-[80vh]  bg-white rounded order-2 md:order1">
              <p className="text-sm">em breve alguns cards</p>
            </div> */}
          </div>

          <div className="order-1 md:order-2">
            <SearchComponent />
          </div>
        </main>
      </div>
    </div>
  );
}
